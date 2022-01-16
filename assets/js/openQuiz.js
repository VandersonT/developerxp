/*-----------------------------------------------------chronometer--------------------------------------------------------------*/
let minutes = 14;
let secounds = 60;

let chronometer = setInterval(function(){
    
    if(secounds == 0 && minutes == 0){
        clearInterval(chronometer);
        document.querySelector('.boxControls h2').innerText = 'Encerrado';

        finished = true;
        document.querySelector('.finish').style.display = 'none';
        checkResult();

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
let progressBar = 0;
let percentageOfEachQuestion = 100 / numberOfQuestions;

renderQuestion();

document.querySelector('.next').addEventListener('click', ()=>{
    currentQuestion++;
    renderQuestion();

    document.querySelector('.prev').style.display = 'block';

    if(currentQuestion == numberOfQuestions-1){
        document.querySelector('.next').style.display = 'none';
        if(!finished){
            document.querySelector('.finish').style.display = 'block';
        }
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

    if(!confirm('Você quer realmente finalizar este quiz?')){
        return false;
    }

    clearInterval(chronometer);
    document.querySelector('.boxControls h2').innerText = 'Encerrado';



    finished = true;
    document.querySelector('.finish').style.display = 'none';
    checkResult();
});

document.querySelector('.restart').addEventListener('click', ()=>{
    location.reload();
});

document.querySelector('.return').addEventListener('click', ()=>{
    if(!confirm('Se voltar perderá todo o progresso feito no teste! Tem certeza?')){
        return false;
    }
    window.location.href = window.location.origin;
});

document.querySelector('.logo').addEventListener('click', ()=>{
    if(!confirm('Você quer realmente voltar para a tela inicial? Perderá todo o progresso feito neste quiz!')){
        return false;
    }
    window.location.href = window.location.origin;
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
            
            /*Increase the percentage done, if it's new*/
            if(!(selectedOptions[currentQuestion] >= 0)){
                progressBar = progressBar + percentageOfEachQuestion;
                document.querySelector('.progress').style.width = progressBar+'%';
            }
            /***/

            selectedOptions[currentQuestion] = i;
            for(let j = 0; j < numberOfAnswers; j++){
                document.querySelectorAll('.boxAnswers .answerSingle .ans')[j].style.color = '#0085FF';
                document.querySelectorAll('.boxAnswers .answerSingle')[j].style.background = 'white';
            }
            document.querySelectorAll('.boxAnswers .answerSingle')[i].style.background = '#292945';
            document.querySelectorAll('.boxAnswers .answerSingle .ans')[i].style.color = 'white';
        })
    }
    
    if(selectedOptions[currentQuestion] >= 0){
        document.querySelectorAll('.boxAnswers .answerSingle')[selectedOptions[currentQuestion]].style.background = '#292945';
        document.querySelectorAll('.boxAnswers .answerSingle .ans')[selectedOptions[currentQuestion]].style.color = 'white'
    }

    if(finished){
        showAnswersOnScreen();
    }
}

function checkResult(){
    let hits = 0;
    let mistakes = 0;
    
    for(let i = 0; i < quizzes[idQuiz].questions.length; i++){
        if(quizzes[idQuiz].questions[i].rightAnswer == selectedOptions[i]){
            hits++;
        }else{
            mistakes++;
        }
    }

    showAnswersOnScreen(); 
    showResultOnScreen(hits, mistakes);
    
}

function showAnswersOnScreen(){
    document.querySelector('.result').style.display = 'block';
    document.querySelectorAll('.boxAnswers .answerSingle')[quizzes[idQuiz].questions[currentQuestion].rightAnswer].style.background = '#00f715';
    document.querySelectorAll('.boxAnswers .answerSingle .ans')[quizzes[idQuiz].questions[currentQuestion].rightAnswer].style.color = 'black';

    if(quizzes[idQuiz].questions[currentQuestion].rightAnswer == selectedOptions[currentQuestion]){
        document.querySelector('.result').classList.remove('wrong');
        document.querySelector('.result').classList.add('correct');
        document.querySelector('.result').innerText = 'Você acertou esta questão';
    }else{
        document.querySelector('.result').classList.remove('correct');
        document.querySelector('.result').classList.add('wrong');
        document.querySelector('.result').innerText = 'Você errou esta questão';
    }

}

function showResultOnScreen(hits, mistakes){
    
    if(hits >= (numberOfQuestions * 90 / 100)){
        document.querySelector('.boxResults--title').innerText = "PARABÉNS";
        document.querySelector('.boxResults--title').style.background = 'green';
        document.querySelector('.finalResult img').src = './assets/images/veryGood.webp';
        document.querySelector('.finalResult--messages h1').innerText = "Uau! Você foi incrivelmente bem!";
        document.querySelector('.hitsNumber').innerText = hits;
        document.querySelector('.mistakesNumber').innerText = mistakes;
    }

    if(hits >= (numberOfQuestions * 70 / 100) && hits < (numberOfQuestions * 90 / 100)){
        document.querySelector('.boxResults--title').innerText = "PARABÉNS";
        document.querySelector('.boxResults--title').style.background = 'green';
        document.querySelector('.finalResult img').src = './assets/images/good.webp';
        document.querySelector('.finalResult--messages h1').innerText = "Nice! Você foi muito bem!";
        document.querySelector('.hitsNumber').innerText = hits;
        document.querySelector('.mistakesNumber').innerText = mistakes;
    }

    if(hits >= (numberOfQuestions * 40 / 100) && hits < (numberOfQuestions * 70 / 100)){
        document.querySelector('.boxResults--title').innerText = "Boa";
        document.querySelector('.boxResults--title').style.background = '#1097cc';
        document.querySelector('.finalResult img').src = './assets/images/normal.webp';
        document.querySelector('.finalResult--messages h1').innerText = "Você conseguiu se virar no quiz!";
        document.querySelector('.hitsNumber').innerText = hits;
        document.querySelector('.mistakesNumber').innerText = mistakes;
    }

    if(hits >= (numberOfQuestions * 20 / 100) && hits < (numberOfQuestions * 40 / 100)){
        document.querySelector('.boxResults--title').innerText = "Não foi muito bom";
        document.querySelector('.boxResults--title').style.background = '#cc1010';
        document.querySelector('.finalResult img').src = './assets/images/bad.webp';
        document.querySelector('.finalResult--messages h1').innerText = "Você não conseguiu ir muito bem!";
        document.querySelector('.hitsNumber').innerText = hits;
        document.querySelector('.mistakesNumber').innerText = mistakes;
    }

    if(hits >= 0 && hits < (numberOfQuestions * 20 / 100)){
        document.querySelector('.boxResults--title').innerText = "Nheee";
        document.querySelector('.boxResults--title').style.background = '#cc1010';
        document.querySelector('.finalResult img').src = './assets/images/veryBad.webp';
        document.querySelector('.finalResult--messages h1').innerText = "Você errou bastate coisa!";
        document.querySelector('.hitsNumber').innerText = hits;
        document.querySelector('.mistakesNumber').innerText = mistakes;
    }

    document.querySelector('.darkScreen').style.display = 'flex';

}

document.querySelector('.closeResults').addEventListener('click', function(){
    document.querySelector('.darkScreen').style.display = 'none';
});
/*------------------------------------------------------------------------------------------------------------------------------*/