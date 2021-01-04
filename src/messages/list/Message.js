import React from 'react'
import * as moment from "moment";
import 'moment/locale/ru';
import SenderComponent from "../senders/SenderComponent";

export default function Message({ message }) {
    const style = {
        block: {
            display: 'flex',
            alignItems: 'center'
        },
        sender: {
            textAlign: 'center',
            background: '#64b077',
            borderRadius: 25,
            width: 50,
            height: 50,
            marginRight: 15
        },
        text: {
            color: '#000000',
            fontSize: 18
        },
        div: {
            minWidth: 200,
            maxWidth: 450,
            minHeight: 50,
            marginTop: 8,
            paddingRight: 15,
            paddingLeft: 15,
            paddingTop: 8,
            background: '#4c6e5a',
            borderRadius: 15
        },
        date: {
            display: 'flex',
            color: '#23284b',
            fontSize: 14
        },
        dateCreate: {
            width: '50%',
            textAlign: 'right',
            margin: 5
        },
        dateUpdate: {
            width: '50%',
            textAlign: 'left',
            margin: 5
        }
    };
    function parseDate(date) {
        if (date) {
            moment.locale('ru');
            return moment(date).format('LLL');
        }

    }

    return (
        <div style={style.block}>
            <div style={style.sender}>
                <SenderComponent senderId={message.sender.id}/>
            </div>
            <div style={style.div}>
                <div style={style.text}>{message.text}</div>
                <div style={style.date}>
                    <div style={style.dateUpdate}>{message.updated_at ? 'изм. ' + parseDate(message.updated_at) : ''}</div>
                    <div style={style.dateCreate}>{parseDate(message.created_at)}</div>
                </div>
            </div>
        </div>
    )
}
