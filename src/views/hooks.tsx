import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core";
import { BaseViewComponentProps, ViewProps } from "./types";

const ViewStyles = (theme: Theme) => createStyles({
    root: {
        display: "flex",
        height: "100vh",
    },
});

const withView = (Component: React.ComponentType<BaseViewComponentProps>) =>
    withStyles(ViewStyles, { name: "View" })((props: ViewProps & WithStyles<typeof ViewStyles>) => {
        const { classes, ...rest } = props;
        return (
            <div className={classes.root}>
                {Component && <Component {...rest} />}
            </div>
        );
    });

const withComponent = () => { };

export default withView;