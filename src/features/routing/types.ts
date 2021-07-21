import { HashRouterProps, RouteProps } from "react-router-dom";
import { ApplicationUserRole } from "../auth/types";

interface AppRouterProps extends HashRouterProps {

};

interface AppRouteProps extends RouteProps {
    links?: string[];
    authorizedRoles?: ApplicationUserRole[];
};

export { };
export type { AppRouterProps, AppRouteProps };
export default AppRouterProps;