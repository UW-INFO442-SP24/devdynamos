import React from 'react';
import Quiz from 'react-quiz-component';
import { quiz } from './quizData'; // Ensure the path is correct
import "../../index.css";


const QuizComponent = () => {
 
 return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
            <Quiz
            quiz={quiz}
            shuffle={true} // Shuffles the questions
            continueTillCorrect ={true}
            showInstantFeedback={true} // Shows instant feedback
            />
        </div>
      </div>
    </div>
 );
};


export default QuizComponent;
