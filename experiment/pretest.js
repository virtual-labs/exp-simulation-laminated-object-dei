 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");

         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [
        {
            question: "1.   LOM is an example of which of the following techniques:", ///// Write the question inside double quotes
            answers: {
                a: "Material Jetting", ///// Write the option 1 inside double quotes
                b: "Material Sheet Lamination",
                c: "Material Extrusion",
                d: "Laser Sintering.",
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

    {
      question: "2. In LOM process sheets are cut using lasers according to the information stored in:",  ///// Write the question inside double quotes
      answers: {
        a: ".doc file",                  ///// Write the option 1 inside double quotes
        b: ".svg file",                  ///// Write the option 2 inside double quotes
        c: ".stl file",  
        d: "all of the above",
            },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
    
    {
 question: "3. In LOM process the adhesive coated sheets are glued by application of:",  ///// Write the question inside double quotes
      answers: {
        a: "Heat",                  ///// Write the option 1 inside double quotes
        b: "Pressure",                  ///// Write the option 2 inside double quotes
        c: "Chemical Reaction",  
        d: "Both a and b",
            },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    {
 question: "4. Which of the following is a limittaion(s) of LOM process:",  ///// Write the question inside double quotes
      answers: {
        a: "Surface finish and accuracy",                  ///// Write the option 1 inside double quotes
        b: "No external support material",                  ///// Write the option 2 inside double quotes
        c: "No chemical reactions",  
        d: "All of the above",
            },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

    {
 question: "5. Which of the following adhesive coated material(s) can be used for LOM process:",  ///// Write the question inside double quotes
      answers: {
        a: "Papers",                  ///// Write the option 1 inside double quotes
        b: "Plastics",                  ///// Write the option 2 inside double quotes
        c: "Metal Laminates",  
        d: "All of the above",
            },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////
