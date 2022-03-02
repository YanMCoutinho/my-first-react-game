import React from "react";
import { EDirection, HEAD_OFFSET, TILE_SIZE } from "../../../settings/constants";
import useEnemyMoviment from "../../../hooks/useEnemyMoviment";
import { IPosition } from "../../../contexts/canvas/types";
import styled, { keyframes } from 'styled-components'
interface IProps {
    position: IPosition;
}

const miniDemon = keyframes`
    from {
        background-position-x: 0;
    }

    to {
        background-position-x: -${TILE_SIZE * 4}px;
    }
`;

const MiniDemonWithAnimation = styled.div`
    background-image: url('./assets/MINI-DEMON.png');
    background-repeat: no-repeat;
    background-size: ${TILE_SIZE * 4}px ${TILE_SIZE * 2}px;
    animation: ${miniDemon} 0.4s steps(4) infinite;
`

const MiniDemon = (props: IProps) => {
    const {position, direction} = useEnemyMoviment(props.position);

    return (
        <MiniDemonWithAnimation 
            style={{
                height: TILE_SIZE + HEAD_OFFSET,
                width: TILE_SIZE,
                backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px `,
                transform: `scaleX(${ direction === EDirection.right ? 1 : -1})`,
                position: 'absolute',
                left: TILE_SIZE * position.x,
                top: TILE_SIZE * position.y - HEAD_OFFSET,
                transition: '0.1s',
                zIndex: 2
            }}
        />
    );
}

export default MiniDemon;