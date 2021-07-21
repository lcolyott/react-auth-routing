import React, { useEffect } from "react";
import { HashRouter, HashRouterProps, Switch, Route } from "react-router-dom";
import { } from "@material-ui/core";
import AppRouterProps, { AppRouteProps } from "./types";
import AppRoutes from "./data";
import AuthContext from "../auth";
import { ViewProps } from "../../views/types";

const RoutingContext = React.createContext<{
    routeTo: (to: string) => void;
}>({
    routeTo: () => { }
});

const AppRoute: React.FunctionComponent<AppRouteProps> = (props) => {
    const auth = React.useContext(AuthContext);
    const routing = React.useContext(RoutingContext);

    const Component: React.ElementType<ViewProps> = props.component as React.ElementType<ViewProps>;
    const { component, ...rest } = props;

    let isAuthenticated = auth.user != null;
    let isAuthorized: boolean = props.authorizedRoles?.includes(auth.user?.role ?? "unauthorized") ?? true;

    return (
        <Route
            {...rest}
            render={(routeProps) => {
                if (isAuthorized) {
                    return (
                        <Component
                            // links={links}
                            {...routeProps}
                        />
                    );
                }

                routing.routeTo("");
            }}
        />
    );
};

const AppRouter: React.FunctionComponent<AppRouterProps> = (props) => {
    const auth = React.useContext(AuthContext);

    const routeTo = (to: string) => {
        window.location.hash = to;
    };

    useEffect(() => {
        if (auth.user) {
            routeTo("home");
        }
        else {
            routeTo("");
        }
    }, [auth.user]);

    return (
        <RoutingContext.Provider
            value={{
                routeTo
            }}
        >
            <HashRouter {...props as HashRouterProps}>
                <Switch>
                    {Object.entries(AppRoutes).map((route, index) => {
                        return <AppRoute {...route[1]} />;
                    })}
                </Switch>
            </HashRouter>
        </RoutingContext.Provider>
    );
};

const RoutingConsumer = RoutingContext.Consumer;

export { AppRoute, RoutingConsumer, RoutingContext };
export default AppRouter;