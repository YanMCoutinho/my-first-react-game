import { fireEventToDocument } from "../dispatchEvent";
import React from "react";
import styled from 'styled-components'

interface IProps {
    text: String;
    name: string;
}

const StyledKey = styled.button`
    width: 70px;
    height: 70px;
    font-size: 30px;
    border-radius: 10px;
    border: 3px solid black;
    margin: 2px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.8s;
    background-color: rgba(0, 0, 0, 0.05);
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`

function prepareToFireEvent(buttonName: string) {
    const event = new KeyboardEvent('keyup', {
        altKey: false,
        bubbles: true,
        cancelable: true,
        charCode: 0,
        code:  buttonName,
        composed: true,
        ctrlKey: false,
        detail: 0,
        isComposing: false,
        key: buttonName,
        location: 0,
        metaKey: false,
        repeat: false,
    })
    fireEventToDocument(event)
}

function Key(props: IProps) {
    return (
        <StyledKey className={`key ${props.name}`} onClick={() => {prepareToFireEvent(props.name)} } >
            {props.text}
        </StyledKey>
    )
}

export default Key;