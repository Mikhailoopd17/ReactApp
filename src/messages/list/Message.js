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
            return moment(date).format('LLL');
        }

    }

    return (
        <div style={style.div}>
            <div style={style.li}>{message.text}</div>
            <div style={style.date}>
                <div style={style.dateUpdate}>{message.updated_at ? 'изм. ' + parseDate(message.updated_at) : ''}</div>
                <div style={style.dateCreate}>{parseDate(message.created_at)}</div>
            </div>
        </div>
    )
}
