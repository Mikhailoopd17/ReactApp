import React from "react";
import Message from "./Message";

export default function MessageComponent(props) {
    const style = {
        div: {
            marginRight: 20
        },
        head: {
            color: '#0f1601',
            textAlign: 'center'
        }
    };
    return (
        <div style={style.div}>
            <p style={style.head}>Сообщения чата</p>
            <ul>
                {props.messages.map(message => {
                    return <Message message={message} key={message.id}/>
                })}
            </ul>
        </div>
    );
}

