import React from "react";
import { ApplicationUser } from "./types";
import * as _ from "lodash";
import DummyUsers from "./data";

const AuthContext = React.createContext<{
    user: ApplicationUser | undefined;
    login: (email: string, password: string) => void;
    logout: () => void;
}>({
    user: undefined,
    login: () => { },
    logout: () => { }
});

// Handles the storage of the authorized user (if any) and all functions related to authorization/authentication
const AuthProvider: React.FunctionComponent<any> = (props) => {
    const [user, setUser] = React.useState<ApplicationUser | undefined>(undefined);

    const login = (email: string, password: string) => {
        let user: ApplicationUser | undefined = _.find(DummyUsers, { email }) ?? undefined;

        if (user) {
            setUser(user);
        }
    };

    const logout = () => {
        setUser(undefined);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
export default AuthContext;