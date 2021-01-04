import React from 'react';


export default function InputAreaComponent () {
    const URL = '/api/messages';
    const newMessage = {
        text: null,
        sender_id: 1
    };
    const style = {
        wrapper: {
            display: 'flex'
        },
        input: {
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

    function submit(data) {

        fetch(URL,{
            method: 'POST',
            body: data,
            headers: {
                // 'Authorization': 'bearer ${token}',
                'Content-Type': 'application/json'
            }
        })
            .then(function(response) {
                return response.json()
            }).then(function(body) {
            console.log(body);
        });

    }



    return (
        <div style={style.wrapper}>
            <form style={style.wrapper}>
                <div>
                    <input style={style.input} value={newMessage.text}/>
                </div>
                <div style={style.button}>
                    <button style={style.button}><img src="/src/submit.png" alt="my image" style={style.button} onChange={submit(newMessage)}/></button>
                </div>
            </form>
        </div>
    )
}

