import { createStyles, Theme, WithStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";
import { BaseViewComponentProps } from "../../views/types";

const SidebarStyles = (theme: Theme) => createStyles({
    root: {
        flexBasis: "5rem",
        borderRight: "1px solid " + theme.palette.divider,
    }
});

interface SidebarProps extends BaseViewComponentProps, WithStyles<typeof SidebarStyles> { };

function Sidebar(props: SidebarProps) {
    const { classes, links, component: Component, ...rest } = props;

    return (
        <React.Fragment>
            <div className={classes.root}>
                {links?.map((value, index) => {
                    return (
                        <Link key={index} to={value} >
                            {value}
                        </Link>
                    );
                })}
            </div>
            {Component && <Component links={links} {...rest} />}
        </React.Fragment>
    );
};

const withSidebar = (component: React.ComponentType<BaseViewComponentProps>) => withStyles(SidebarStyles, { name: "View" })((props: SidebarProps) => {
    return Sidebar({ component, ...props as Omit<SidebarProps, "component"> });
});

export { withSidebar };