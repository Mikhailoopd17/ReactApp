import React from "react";
import Message from "./Message";

export default function MessageComponent(props) {

    return (
        <div className="message-list">
            <p>Message list</p>
            <ul>
                {props.messages.map(message => {
                    return <Message message={message} key={message.id}/>
                })}
            </ul>
        </div>
    );
}

