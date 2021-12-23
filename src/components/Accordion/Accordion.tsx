import React, {useState} from 'react';
import {AccordionBody} from "./AccordionBody";

type AccordionPropsType = {
    titleValue: string;
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>
            -- {props.title} --
        </h3>
    )
}