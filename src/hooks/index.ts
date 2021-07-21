import { withStyles } from "@material-ui/core";
import React from "react";
import View from "../views";
import { BaseViewComponentProps, ViewProps, ViewStyles } from "../views/types";

export const withView = (component: React.ComponentType<BaseViewComponentProps>) => withStyles(ViewStyles, { name: "View" })((props: ViewProps) => {
    return View({ component, ...props as Omit<ViewProps, "component"> });
});