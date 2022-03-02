import { useContext } from "react";
import { IPosition } from "../../../contexts/canvas/types";
import { ChestsContext } from "../../../contexts/chests";
import { TILE_SIZE } from "../../../settings/constants";
import styled, { keyframes, css } from 'styled-components'

interface IProps {
    animation: Boolean;
    position: IPosition;
}

type styledPropsType = {
    animation: boolean;
}

const chest = keyframes`
    from {
        background-position-x: 0;
    }

    to {
        background-position-x: -${TILE_SIZE * 2}px;
    }
`;

const chestAnimation = css`
    ${chest} 1s forwards steps(2);
`

const ChestWithAnimation = styled.div.attrs((props: styledPropsType) => ({
    animation: props.animation,
}))<styledPropsType>`
    background-image: url('./assets/CHEST.png');
    background-repeat: no-repeat;
    background-size: ${TILE_SIZE * 3}px ${TILE_SIZE}px;
    animation: ${(props: styledPropsType)=> (props.animation ? (chestAnimation) : 'null' )}
`

const Chest = (props: IProps) => {
    const {x, y} = props.position
    const { openedChests } = useContext(ChestsContext)

    const checkShouldAnimate = openedChests.positions.find(
        position => position.x === x && position.y === props.position.y
    );

    const shouldAnimate = checkShouldAnimate ? true : false

    return (
        <ChestWithAnimation animation={shouldAnimate}
            style={{
                height: TILE_SIZE,
                width: TILE_SIZE,
                backgroundPosition: `0px 0px`,
                position: 'absolute',
                left: TILE_SIZE * x,
                top: TILE_SIZE * y,
                zIndex: 0,

            }}
        />
    );
}

export default Chest;