import React ,{useState,useContext,useEffect}from 'react';
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Context';

function Quiz(){
    const {score,setScore,setGameState}=useContext(QuizContext);

    const [currQuestion,setCurrQuestion]=useState(0);
    const [optChosen,setOptChosen]=useState("");


    const nextQuestion=()=>{
        if(Questions[currQuestion].answer === optChosen){
            setScore(score+1);
        }
        // alert(score);
        setCurrQuestion(currQuestion+1);
    }

    useEffect(()=>{
        setOptChosen("");
    },[currQuestion]);

    const finishQuiz=()=>{
        if(Questions[currQuestion].answer === optChosen){
            setScore(score+1);
        }
        setGameState("endScreen");
    

    }


    return(
        <div className='Quiz'>
            <h1 className="alignQues">{Questions[currQuestion].prompt}</h1>
                <div className='opt'>
                    <button 
                        className={optChosen === "optA" ? "selected" : ""}
                        onClick={() => setOptChosen("optA")}>
                        {Questions[currQuestion].optA}
                    </button>
                    <button 
                        className={optChosen === "optB" ? "selected" : ""}
                        onClick={() => setOptChosen("optB")}>
                        {Questions[currQuestion].optB}
                    </button>
                    <button 
                        className={optChosen === "optC" ? "selected" : ""}
                        onClick={() => setOptChosen("optC")}>
                        {Questions[currQuestion].optC}
                    </button>
                    <button 
                        className={optChosen === "optD" ? "selected" : ""}
                        onClick={() => setOptChosen("optD")}>
                        {Questions[currQuestion].optD}
                    </button>
                </div>
            {/* <div className='opt'>
                <button onClick={()=>setOptChosen("optA")}>{Questions[currQuestion].optA}</button>
                <button onClick={()=>setOptChosen("optB")}>{Questions[currQuestion].optB}</button>
                <button onClick={()=>setOptChosen("optC")}>{Questions[currQuestion].optC}</button>
                <button onClick={()=>setOptChosen("optD")}>{Questions[currQuestion].optD}</button>
            </div> */}
            {currQuestion===Questions.length-1?(
                <button className="colorButton" onClick={finishQuiz}>Finish Quiz</button>
               ):(
                <button onClick={nextQuestion} className="colorButton">Next Question</button>
              )}
        </div>
    );
}
export default Quiz;