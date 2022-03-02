import { PropsWithChildren } from "react";
import styled from "styled-components";
import { EDirection } from "../../settings/constants";
import Key from "./Key";

function Keyboard(props: PropsWithChildren<{}>) {
    const StyledDiv = styled.div`
        margin: 40px auto 100px auto; 
    `
    return (
        <div>
            <div id="keyboard">
                {props.children}
                <StyledDiv style={{
                    backgroundColor: 'white',
                    padding: 10,
                    borderRadius: 10,
                    maxWidth: 250,
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Key text={'↑'} name={EDirection.up}/>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Key text={'←'} name={EDirection.left} />
                        <Key text={'↓'} name={EDirection.down} />
                        <Key text={'→'} name={EDirection.right} />
                    </div>
                </StyledDiv>
            </div>
            <script src="./dispatchEvent.js"></script>
        </div>
    )
}

export default Keyboard;