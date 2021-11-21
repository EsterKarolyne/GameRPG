import * as C from './styles';
import {CharacterSides} from '../../types/CharacterSides'

type Props = {
    x: number;
    y: number;
    side: CharacterSides;
    name: string;
}

export const Monster = ({x,y,side, name}:Props) =>{
    const size = 24
    const sides = {
        down: 25,
        left: 50, 
        right: 50,
        up: 0,

    }
    return(
        <C.Container
            size = {size}
            left = {x*size}
            top = {y*size}
            sidePos={sides[side] ?? 0}
        >
             <C.NameBox>{name}</C.NameBox>
        </C.Container>
    )
}