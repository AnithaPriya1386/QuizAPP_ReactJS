import React,{useContext} from 'react';
import { QuizContext } from '../Helpers/Context';
import '../App.css'
function MainMenu(){
    const {setGameState}=useContext(QuizContext)
    return(
        <div className='Menu'>
            <h1>Welcome to the React Quiz</h1>
            <button className="colorButton" onClick={()=>{setGameState("quiz")}}>Start Quiz</button>
        </div>
    );
}
export default MainMenu;