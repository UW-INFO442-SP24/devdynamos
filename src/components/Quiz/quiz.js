import React from 'react';
import Quiz from 'react-quiz-component';
import { quiz } from './quizData'; // Ensure the path is correct


const QuizComponent = () => {
 // Custom function to render a custom result page
 /*const renderCustomResultPage = (obj) => {
   console.log(obj);
   return (
     <div>
       <h2>Custom Result Page</h2>
       <p>You answered {obj.numberOfCorrectAnswers} out of {obj.numberOfQuestions} questions correctly.</p>
       <p>Total Points: {obj.correctPoints}</p>
     </div>
   );
 }; */


 return (
   <div>
     <Quiz
       quiz={quiz}
       shuffle={true} // Shuffles the questions
       //showDefaultResult={false} // Disables the default result page
       //customResultPage={renderCustomResultPage} // Enables custom result page
       continueTillCorrect ={true}
       showInstantFeedback={true} // Shows instant feedback
     />
   </div>
 );
};


export default QuizComponent;
