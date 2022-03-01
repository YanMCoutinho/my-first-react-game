import useHeroMoviment from "../../../hooks/useHeroMoviment";
import { EDirection, EWalker, HEAD_OFFSET, TILE_SIZE } from "../../../settings/constants";
import { IPosition } from "../../../contexts/canvas/types";
import './Hero.css'

interface IProps {
    position: IPosition;
}

const Hero = (props: IProps) => {  
    const {position, direction} = useHeroMoviment(props.position, EWalker.hero);

    return (
        <div 
            style={{
                height: TILE_SIZE + HEAD_OFFSET,
                width: TILE_SIZE,
                backgroundImage:"url('./assets/HERO.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: `${TILE_SIZE * 4}px auto`, //192px 96px
                backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
                animation: 'hero-animation 0.4s steps(4) infinite',
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