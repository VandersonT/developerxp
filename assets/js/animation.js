//downArrow animation
document.querySelector('.downArrow').addEventListener('click', function(){
    let height = window.innerHeight;
    window.scroll({top: height, left: 0, behavior: 'smooth' })
});


//Benefits animatio
window.addEventListener("scroll", function (event) {
    let scroll = this.scrollY;
    let benefitsSingle = document.querySelectorAll('.benefits--single');
    if(scroll >= 100){
        
        for(let i =0; i < benefitsSingle.length; i++){
            benefitsSingle[i].style.display = 'block';
        }

    }
});