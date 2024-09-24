import React,{useContext} from 'react';
import { QuizContext } from '../Helpers/Context';
import { Questions } from '../Helpers/QuestionBank';
import '../App.css'
function EndScreen(){
const {score,setScore,setGameState}=useContext(QuizContext);

    const restartQuiz=()=>{
        setScore(0);
        setGameState("menu");
    }


    return(
        <div className='EndScreen'>
            <h3>Quiz Finished !!!</h3>
            <h3>{score}/{Questions.length}</h3>
            <button className='colorButton' onClick={restartQuiz}>Restart Quiz</button>
        </div>
    );
}
export default EndScreen;