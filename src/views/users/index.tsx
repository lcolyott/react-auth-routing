import React from "react";
import { withSidebar } from "../../components/sidebar";
import DummyUsers from "../../features/auth/data";
import withView from "../hooks";
import { BaseViewComponentProps } from "../types";

const Users: React.FunctionComponent<BaseViewComponentProps> = (props) => {
    return (
        <div>
            <ul>
                {DummyUsers.map((user, index) => (
                    <li>
                        {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default withView(withSidebar(Users));