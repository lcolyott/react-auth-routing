import React from "react";
import AuthContext from "../../features/auth";
import { RoutingConsumer } from "../../features/routing";
import { withView } from "../../hooks";

const RouteIndex: React.FunctionComponent<any> = (props) => {
    const auth = React.useContext(AuthContext);
    const authenticated = auth.user != undefined;

    return (
        <RoutingConsumer>
            {(context) => {
                authenticated ?
                    context.routeTo("home")
                    : context.routeTo("login");

                return React.Fragment;
            }}
        </RoutingConsumer>
    );
};

export default withView(RouteIndex);