import { useEffect} from 'react';
import * as C from './App.styles'; 
import {Character} from './components/Character';
import {useCharacter} from './hooks/useCharacter';
import {Monster} from './components/Monster';
import {useMonster} from './hooks/useMonster';

const App = () =>{
  const char = useCharacter('Vi');
  const char2 = useCharacter('Caitlyn');
  const monster = useMonster('bola');

  useEffect(()=>{
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) =>{
    // observa a variavel e colocara os casos
    switch(e.code){
      case 'KeyA':
        char2.moveLeft();
        break
      case 'ArrowLeft':
        char.moveLeft();

      break;
      case 'KeyW':
        char2.moveUp();
        break;
      case 'ArrowUp':
        char.moveUp();

      break;
      case 'KeyD':
        char2.moveRight();
        break;
      case 'ArrowRight':
        char.moveRight();

      break;
      case 'KeyS':
        char2.moveDown();
        break;
      case 'ArrowDown':
        char.moveDown();

      break;
    }
    
  }

  const moveMonster = useEffect(() => {
    const interval = setInterval(() => {
      const move = Math.floor(Math.random() * 5) + 1;
      switch(move){
        case 1:
          monster.moveLeft();
          break
        case 2:
          monster.moveUp();
          break;
        case 3:
          monster.moveRight();
          break;
        
        case 4:
          monster.moveDown();
          break;
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return(
    <C.Container>
      <C.Map>
        <Monster x={monster.x} y={monster.y} side={monster.side} name={monster.name} ></Monster>
        <Character x={char.x} y={char.y} side={char.side} name={char.name}/> 
        <Character x={char2.x} y={char2.y} side={char2.side} name={char2.name}/>
      </C.Map>
    </C.Container>
  );
}

export default App;
