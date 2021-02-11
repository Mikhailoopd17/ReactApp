import React from "react";

export default function UserMenuComponent() {
    const style = {
        block: {
            position: 'absolute',
            top: 0,
            right: 0,
            float: 'right',
            display: 'flex',
            minWidth: 200,
            maxWidth: 400,
            minHeight: 50,
            maxHeight: 200,
            margin: 10,
            paddingRight: 10,
            paddingLeft: 10,
            paddingTop: 10,
            background: '#37426e',
            border: '1px solid green',
            borderRadius: 6,

        },
        user: {
            position: 'absolute',
            top: 0,
            right: 0,
            display: 'table-cell',
            verticalAlign: 'middle',
            textAlign: 'center',
            borderRadius: 15,
            width: 50,
            height: 50,
            background: '#83392c',
            fontSize: 35,
            margin: 5,
            // marginRight: 15
        },
        text: {
            color: '#000000',
            fontSize: 20,
            verticalAlign: 'center'
        },
        div: {
            minWidth: 200,
            maxWidth: 400,
            minHeight: 50,
            maxHeight: 200,
            margin: 8,
            paddingRight: 10,
            paddingLeft: 10,
            paddingTop: 10,
            background: '#37426e',
            // borderRadius: 6
        }
    };
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };

    return (
        <div style={style.block}>
            <div style={style.text}>
                <span>Иванов И.И.</span>
            </div>
            <div style={style.user}>
                <span>P</span>
            </div>
        </div>
    )
}
