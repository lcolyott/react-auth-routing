import React from "react";
import { createStyles, Theme, WithStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { BaseViewComponentProps } from "../../views/types";

const SidebarStyles = (theme: Theme) => createStyles({
    root: {
        flexBasis: "5rem",
        borderRight: "1px solid " + theme.palette.divider,
    }
});

type SidebarProps = BaseViewComponentProps & WithStyles<typeof SidebarStyles>;

function Sidebar(props: SidebarProps) {
    const { classes, component: Component, ...rest } = props;

    return (
        <React.Fragment>
            <div className={classes.root}>

            </div>
            {Component && <Component {...rest} />}
        </React.Fragment>
    );
};

const withSidebar = (component: React.ComponentType<BaseViewComponentProps>) => withStyles(SidebarStyles, { name: "View" })((props: SidebarProps) => {
    return Sidebar({ component, ...props as Omit<SidebarProps, "component"> });
});

export { withSidebar };