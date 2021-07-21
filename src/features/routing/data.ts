import React, { Fragment } from "react";
import { Home, RouteIndex, Login, Users } from "../../views";
import { ViewProps } from "../../views/types";
import { AppRouteProps } from "./types";

const AppRoutes: Record<string, AppRouteProps> = {
    "index": {
        exact: true,
        path: "/",
        component: RouteIndex,
    },
    "login": {
        exact: true,
        path: "/login",
        component: Login
    },
    "home": {
        exact: true,
        path: "/home",
        component: Home,
        authorizedRoles: ["user", "admin", "superadmin"],
        links: ["/users"]
    },
    "users": {
        exact: true,
        path: "/users",
        component: Users,
        authorizedRoles: ["admin", "superadmin"],
        links: ["/home"]
    },
};

export default AppRoutes;