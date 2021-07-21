import React from "react";
import { withSidebar } from "../../components/sidebar";
import AuthContext from "../../features/auth";
import { withView } from "../../hooks";

const Home: React.FunctionComponent<any> = (props) => {
    const auth = React.useContext(AuthContext);

    return (
        <div className={"view"}>
            {auth.user?.role}
            <button onClick={auth.logout}>
                Logout
            </button>
        </div>
    );
};

export default withView(withSidebar(Home));