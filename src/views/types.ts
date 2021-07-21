import { RouteComponentProps } from "react-router-dom";
import { createStyles, Theme, WithStyles } from "@material-ui/core";
import React from "react";

export const ViewStyles = (theme: Theme) => createStyles({
    root: {
        width: "100vw",
        height: "100vh",

        maxWidth: "100vw",
        maxHeight: "100vh",

        backgroundColor: theme.palette.background.default,

        overflow: "hidden",
    },
    content: {
        display: "flex",
        flexDirection: "row",

        width: "100%",
        height: "100%",

        overflowY: "auto",

        "& > .view": {
            flex: "1 1 auto",
        }
    }
});

export interface BaseViewComponentProps extends RouteComponentProps {
    links?: string[];
    component?: React.ComponentType<BaseViewComponentProps>;
};

export interface ViewProps extends BaseViewComponentProps, WithStyles<typeof ViewStyles> { };