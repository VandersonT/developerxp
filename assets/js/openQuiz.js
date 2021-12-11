/*-----------------------------------------------------chronometer--------------------------------------------------------------*/
let minutes = 9;
let secounds = 60;

let chronometer = setInterval(function(){
    
    if(secounds == 0 && minutes == 0){
        clearInterval(chronometer);
        alert('acabour');
        return false;
    }

    if(secounds == 0 && minutes > 0){
        secounds = 60;
        minutes--;
    }

    secounds--;


    document.querySelector('.boxControls h2').innerText = ("0000" + minutes).slice(-2)+':'+("0000" + secounds).slice(-2);
}, 1000)
/*------------------------------------------------------------------------------------------------------------------------------*/


/*---------------------------------------------------------Quiz-----------------------------------------------------------------*/
let idQuiz = sessionStorage.getItem('currentQuiz');
let currentQuestion = 0;
let numberOfQuestions = quizzes[idQuiz].questions.length;
let selectedOptions = [];
let finished = false;

renderQuestion();

document.querySelector('.next').addEventListener('click', ()=>{
    currentQuestion++;
    renderQuestion();

    document.querySelector('.prev').style.display = 'block';

    if(currentQuestion == numberOfQuestions-1){
        document.querySelector('.next').style.display = 'none';
        document.querySelector('.finish').style.display = 'block';
    }
});

document.querySelector('.prev').addEventListener('click', ()=>{
    currentQuestion--;
    renderQuestion()

    if(currentQuestion == 0){
        document.querySelector('.prev').style.display = 'none';
        return false;
    }

    if(document.querySelector('.finish')){
        document.querySelector('.finish').style.display = 'none';
        document.querySelector('.next').style.display = 'block';
    }
});

document.querySelector('.finish').addEventListener('click', ()=>{

    if(selectedOptions.length < numberOfQuestions){
        alert('Você deve responder todas as questões para finalizar o quiz!');
        return false;
    }
    
    for(let i = 0; i < selectedOptions.length; i++){
        if(selectedOptions[i] == null){
            alert('Você deve responder todas as questões para finalizar o quiz!');
            return false;
        }
    }
    if(!confirm('Você quer realmente finalizar este quiz?')){
        return false;
    }

    finished = true;
    alert('finalizado bora verificar')
});


//FUNCTIONS
function renderQuestion(){
    let numberOfAnswers = quizzes[idQuiz].questions[currentQuestion].options.length;

    //Remove all options from previous quiz, if any.
    document.querySelector('.boxAnswers').innerText = "";

    //Set new question.
    document.querySelector('.boxQuestion p').innerText = quizzes[idQuiz].questions[currentQuestion].question;

    //sets the new options 
    for(let i = 0; i < numberOfAnswers; i++){
        let boxAnswer = document.querySelector('.modelToClone .answerSingle').cloneNode(true);
        boxAnswer.querySelectorAll('p')[0].innerText = i+1;
        boxAnswer.querySelectorAll('p')[1].innerText = quizzes[idQuiz].questions[currentQuestion].options[i];
        document.querySelector('.boxAnswers').append(boxAnswer);

        boxAnswer.addEventListener('click', function(){

            /*check if this quiz is finished*/
            if(finished){
                alert('Você já encerrou este quiz!');
                return false;
            }
            /***/

            selectedOptions[currentQuestion] = i;
            for(let j = 0; j < numberOfAnswers; j++){
                document.querySelectorAll('.boxAnswers .answerSingle .ans')[j].style.color = '#0085FF';
                document.querySelectorAll('.boxAnswers .answerSingle')[j].style.background = 'white';
            }
            document.querySelectorAll('.boxAnswers .answerSingle')[i].style.background = '#292945';
            document.querySelectorAll('.boxAnswers .answerSingle .ans')[i].style.color = 'white'
        })
    }
    
    if(selectedOptions[currentQuestion] >= 0){
        document.querySelectorAll('.boxAnswers .answerSingle')[selectedOptions[currentQuestion]].style.background = '#292945';
        document.querySelectorAll('.boxAnswers .answerSingle .ans')[selectedOptions[currentQuestion]].style.color = 'white'
    }
}

/*------------------------------------------------------------------------------------------------------------------------------*/