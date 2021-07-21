import React from "react";
import RouteIndex from "./routeIndex";
import Login from "./login";
import Home from "./home";
import Users from "./users";
import { ViewProps } from "./types";


function View(props: ViewProps) {
    const { classes, component: Component, ...rest } = props;

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                {Component && <Component {...rest} />}
            </div>
        </div>
    );
};

export { RouteIndex, Login, Home, Users };
export default View;