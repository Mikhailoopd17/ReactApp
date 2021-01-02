import React from 'react'
import * as moment from "moment";

export default function Message({ message }) {
    const style = {
        li: {
            color: '#000000',
            listStyle: 'none',
            fontSize: 18
        },
        div: {
            minWidth: 150,
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
            color: '#23284b',
            fontSize: 14,
            textAlign: 'right',
            margin: 0
        }
    };
    function parseDate(date) {
        if (date) {
            moment.format('dd.MM.yyyy HH:mm');
            return moment(date);
        }

    }

    return (
        <div style={style.div}>
            <li style={style.li}>{message.text}</li>
            <div style={style.date}>
                <a>{(message.updated_at)}</a>
                <a>{(message.created_at)}</a>
            </div>
        </div>
    )
}
