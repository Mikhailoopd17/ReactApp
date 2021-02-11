import React, {useEffect} from "react";
import Message from "./Message";
import InputAreaComponent from "../inputArea/InputAreaComponent";
const urlAdd = "/api/messages";

export default function MessageComponent(props) {
    let text = '';
    const style = {
        div: {
            overflowY: 'scroll',
            margin: 5,
            height: '73vh',
            background: '#282c34'
        },
        head: {
            fontWeight: 700,
            color: '#ffffff',
            textAlign: 'center'
        },
        input: {
            paddingTop: 10,
            down: 0,
            display: 'block'
        },
        wrapper: {
            display: 'flex'
        },
        input2: {
            //text
            color: '#000000',
            fontSize: 18,


            marginLeft: 40,
            marginRight: 20,

            height: 40,
            background: '#feffda',
            border: 0,
            borderRadius: 2,
            display: 'flex'
            // minWidth: '100%'
        },
        button: {
            height: 40,
            width: 40,
        }
    };

    function Submit() {
        useEffect(() => {
            fetch(urlAdd, {
                method: 'POST',
                body: JSON.stringify({
                    text: text,
                    sender_id: 1
                }),
                headers: {'Content-Type': 'application/json'}
            })
                .then(response => response.json())
                .then(data => console.log(data))
        }, []);

    }

    return (
        <div >
            <p style={style.head}>Сообщения чата</p>
            <div style={style.div}>
                {props.messages.map(message => {
                    return (
                        <Message message={message} key={message.id}/>
                    )
                })}
            </div>
            <div style={style.input}>
                <div style={style.wrapper}>
                    <form onSubmit={Submit()} style={style.wrapper}>
                        <div>
                            <input  style={style.input2} src={text}/>
                        </div>
                        <div style={style.button}>
                            <button style={style.button}><img src="/src/submit.png" alt="my image" style={style.button}/></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

