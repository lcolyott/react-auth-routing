import { Button, createStyles, Divider, Paper, TextField, Theme, Toolbar, Typography, withStyles, WithStyles } from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";
import AuthContext from "../../features/auth";
import { withView } from "../../hooks";
import { BaseViewComponentProps } from "../types";

const LoginStyles = (theme: Theme) => createStyles({
    root: {
        display: "flex",
        width: "100%",
        height: "100%",

        justifyContent: "center",
        alignItems: "center",
    },
    panel: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "25rem",
        gap: "1rem",

        padding: "1rem",
    }
});

interface LoginProps extends BaseViewComponentProps, WithStyles<typeof LoginStyles> { };

const Login = withStyles(LoginStyles, { name: "Login" })((props: LoginProps) => {
    const auth = React.useContext(AuthContext);

    const submit = (params: { email: string, password: string }) => {
        auth.login(params.email, params.password);
    };

    const form = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: submit
    });

    const { classes, ...rest } = props;

    return (
        <div className={classes.root}>
            <form onSubmit={form.handleSubmit}>
                <Paper className={classes.panel}>
                    <Toolbar disableGutters>
                        <Typography variant={"h4"}>
                            Login
                        </Typography>
                    </Toolbar>
                    <TextField
                        name={"email"}
                        required
                        fullWidth
                        variant={"outlined"}
                        label={"Email"}
                        value={form.values.email}
                        onChange={form.handleChange}
                    />
                    <TextField
                        name={"password"}
                        required
                        fullWidth
                        variant={"outlined"}
                        label={"Password"}
                        value={form.values.password}
                        onChange={form.handleChange}
                    />
                    <Button variant={"contained"}>
                        Create Account
                    </Button>
                    <Button type={"submit"} variant={"contained"}>
                        Login
                    </Button>
                </Paper>
            </form>
        </div>
    );
});

export default withView(Login);