import React from "react";
import { BaseViewComponentProps } from "./types";

/**
 * A map of all registered views
 */
const registeredViews: Map<string, {}> = new Map([
    ["", {}]
]);

/** A map of all registered view components
 *  View components are used to decorate views
 */
const registeredViewComponents: Map<string, React.ComponentType<BaseViewComponentProps>> = new Map([
    ["", React.Fragment]
]);

/** Register a view with the system */
const registerView = () => {

};

/** Register a view component with the system */
const registerComponent = () => {

};

export { };