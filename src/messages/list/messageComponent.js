import React from "react";
import Message from "./Message";
import InputAreaComponent from "../inputArea/InputAreaComponent";

export default function MessageComponent(props) {
    const style = {
        div: {
            overflowY: 'scroll',
            margin: 5,
            height: '70vh'
        },
        head: {
            fontWeight: 700,
            color: '#0f1601',
            textAlign: 'center'
        },
        input: {
            paddingTop: 10,
            down: 0,
            display: 'block'
        }
    };
    return (
        <div>
            <p style={style.head}>Сообщения чата</p>
            <div style={style.div}>
                {props.messages.map(message => {
                    return (
                        <Message message={message} key={message.id}/>
                    )
                })}
            </div>
            <div style={style.input}>
                <InputAreaComponent/>
            </div>
        </div>

    );
}

