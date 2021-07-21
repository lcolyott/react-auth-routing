import { HashRouterProps, RouteProps } from "react-router-dom";
import { ApplicationUserRole } from "../auth/types";

export interface AppRouterProps extends HashRouterProps {

};

export interface AppRouteProps extends RouteProps {
    authorizedRoles?: ApplicationUserRole[];
};

export default AppRouterProps;