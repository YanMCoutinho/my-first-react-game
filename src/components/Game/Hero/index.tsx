import useHeroMoviment from "../../../hooks/useHeroMoviment";
import { EDirection, EWalker, HEAD_OFFSET, TILE_SIZE } from "../../../settings/constants";
import { IPosition } from "../../../contexts/canvas/types";
import styled, { keyframes } from 'styled-components'
interface IProps {
    position: IPosition;
}

const hero = keyframes`
    from {
        background-position-x: 0;
    }

    to {
        background-position-x: -${TILE_SIZE * 4}px;
    }
`;

const HeroWithAnimation = styled.div`
    background-image: url('./assets/HERO.png');
    background-repeat: no-repeat;
    background-size: ${TILE_SIZE * 4}px ${TILE_SIZE * 2}px;
    animation: ${hero} 1s steps(4) infinite;
`

const Hero = (props: IProps) => {  
    const {position, direction} = useHeroMoviment(props.position, EWalker.hero);

    return (
        <HeroWithAnimation 
            style={{
                height: TILE_SIZE + HEAD_OFFSET,
                width: TILE_SIZE,
                backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
                transform: `scaleX(${ direction === EDirection.right ? 1 : -1})`,
                position: 'absolute',
                left: TILE_SIZE * position.x,
                top: TILE_SIZE * position.y - HEAD_OFFSET,
                transition: '0.2s',
                zIndex: 1

            }}
        />
    );
}

export default Hero;