//downArrow animation
document.querySelector('.downArrow').addEventListener('click', function(){
    let height = window.innerHeight;
    window.scroll({top: height, left: 0, behavior: 'smooth' })
});


//Benefits animation
window.addEventListener("scroll", function (event) {
    let scroll = this.scrollY;
    let benefitsSingle = document.querySelectorAll('.benefits--single');
    if(scroll >= 100){
        
        for(let i =0; i < benefitsSingle.length; i++){
            benefitsSingle[i].style.display = 'block';
        }

    }
});

//Renderiza os quizzes na tela
quizzes.map((item, index)=>{
    let quizSingle = document.querySelector('.quizSingleModel .quizSingle').cloneNode(true);

    quizSingle.querySelector('img').src = "./assets/images/"+item.img;
    quizSingle.querySelector('h1').innerText = item.name;
    quizSingle.querySelector('p').innerText = item.description;

    quizSingle.querySelector('button').addEventListener('click', ()=>{
        sessionStorage.setItem('currentQuiz', index);
        window.location.href = "http://127.0.0.1:5500/openQuiz.html";
    });

    document.querySelector('.quizzes').append(quizSingle);
});