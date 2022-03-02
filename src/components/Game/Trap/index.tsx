import React from "react";
import './Trap.css'
import { TILE_SIZE } from "../../../settings/constants";
import styled, { keyframes } from 'styled-components'

const trapAnimation = keyframes`
    from {
        background-position-x: 0;
    }

    to {
        background-position-x: -${TILE_SIZE * 8}px;
    }
`;

const TrapWithAnimation = styled.div`
    background-image: url('./assets/TRAP.png');
    background-repeat: no-repeat;
    background-size: ${TILE_SIZE * 8}px ${TILE_SIZE}px;
    animation: ${trapAnimation} 1s steps(8) infinite;
`

const Trap = (props) => {
    const {x, y} = props.position

    return (
        <TrapWithAnimation style={{
                    height: TILE_SIZE,
                    width: TILE_SIZE,
                    // borderImageRepeat: 'stretch',
                    // animation: 'trap-animation 1s steps(8) infinite',
                    position: 'absolute',
                    left: TILE_SIZE * x,
                    top: TILE_SIZE * y,
                    zIndex: 0,

                }}
            />
        // </TrapAnimation> 
    );
}

export default Trap;