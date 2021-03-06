import React, {useState} from 'react';

type PropsType = {
    on: boolean
    onChange: (on:boolean) => void
}

export function OnOff(props: PropsType) {
    let onStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "olivedrab" : "white"
    }
    let offStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "2px",
        backgroundColor: !props.on ? "firebrick" : "white",
    }
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: props.on ? "olivedrab" : "firebrick"
    }

    return (
        <div>
            <div>Controlled OnOff</div>
            <div style={onStyle}
                 onClick={() => {
                     props.onChange(true)
                 }}>On
            </div>
            <div style={offStyle}
                 onClick={() => {
                     props.onChange(false)
                 }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}