import React, {useEffect} from 'react';


export default function InputAreaComponent () {

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

    // function Submit(data) {
    //
    //     useEffect(() => {
    //         fetch(urlAdd, {
    //             method: 'POST',
    //             body: JSON.stringify(newMessage),
    //             headers: {'Content-Type': 'application/json'}
    //         })
    //             .then(response => response.json())
    //             .then(data => console.log(data))
    //     }, []);
    //
    // }



    return (
        <div style={style.wrapper}>
            <form  style={style.wrapper}>
                <div>
                    <input style={style.input}/>
                </div>
                <div style={style.button}>
                    <button style={style.button}><img src="/src/submit.png" alt="my image" style={style.button}/></button>
                </div>
            </form>
        </div>
    )
}

