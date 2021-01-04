import './App.css';
import React, { useEffect } from "react";
import MessageComponent from "./messages/list/messageComponent";

function App() {
    const [ messages, setMessage ] = React.useState([]);
    const url = "/api/messages";

    useEffect(() => {
       fetch(url)
           .then(response => response.json())
           .then(data => setMessage(data))
    }, []);

    // function setMessage() {
    //     setMessages(
    //         messages.map(message => {
    //             return message;
    //         })
    //     )
    // }

    return (
        <div>
            <h1>Learn</h1>

            <MessageComponent messages={messages}/>
        </div>
    );
}

export default App;
