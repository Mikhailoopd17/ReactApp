import './App.css';
import React, { useEffect } from "react";
import MessageComponent from "./messages/list/messageComponent";

function App() {
    const [ messages, setMessage ] = React.useState([]);
    const url = "/api/messages/list";
    const body = {
        start: null,
        page: null,
        params: {
            ids: [],
            start: null,
            end: null,
            searchText: null,
            senderIds: null,
            deleted: false
        }
    };
    const style = {
        header: {
            width: '100%',
            top: 0,
            right: 0,
            background: '#1b3a7e',
            height: '200px',
            display: 'block'
        }
    };

    useEffect(() => {
       fetch(url, {
           method: 'POST',
           body: JSON.stringify(body),
           headers: {'Content-Type': 'application/json'}
       })
           .then(response => response.json())
           .then(data => setMessage(data.list))
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
            <MessageComponent messages={messages}/>
        </div>
    );
}

export default App;
