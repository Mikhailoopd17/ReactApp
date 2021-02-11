import React from "react";
import UserMenuComponent from "./UserMenuComponent";

export class UserComponent extends React.Component {
    render() {
        return <div>
            <h1>Main header application </h1>
            <UserMenuComponent/>
        </div>;
    }
}
