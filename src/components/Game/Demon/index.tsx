import { IPosition } from "../../../contexts/canvas/types";
import useEnemyMoviment from "../../../hooks/useEnemyMoviment";
import { DEMON_TILE_SIZE, EDirection, TILE_SIZE } from "../../../settings/constants";
import styled, { keyframes } from 'styled-components'

interface IProps {
    position: IPosition;
}

const demon = keyframes`
    from {
        background-position-x: 0;
    }

    to {
        background-position-x: -${TILE_SIZE * 4}px;
    }
`;

const DemonWithAnimation = styled.div`
    background-image: url('./assets/DEMON.png');
    background-repeat: no-repeat;
    background-size: ${TILE_SIZE * 4}px ${TILE_SIZE * 2}px;
    animation: ${demon} 1.1s steps(4) infinite;
`

const Demon = (props: IProps) => {
    const {position, direction} = useEnemyMoviment(props.position);

    return (
        <DemonWithAnimation 
            style={{
                height: DEMON_TILE_SIZE,
                width: DEMON_TILE_SIZE,
                backgroundPosition: `0px 0px`,
                transform: `scaleX(${ direction === EDirection.right ? 1 : -1})`,
                position: 'absolute',
                left: TILE_SIZE * position.x,
                top: TILE_SIZE * position.y,
                transition: '0.4s',
                zIndex: 2,
            }}
        />
    );
}

export default Demon;