$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky")
        }
    });
});
// openAim 
const aimBtn = document.querySelector('.js-aim')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-close-aim')

function showAimDoc(){
    modal.classList.add('open')
}
function hiddenAimDoc(){
    modal.classList.remove('open')
}

aimBtn.addEventListener('click', showAimDoc)
modalClose.addEventListener('click', hiddenAimDoc)

// plan & progress
const planBtn = document.querySelector('.js-plan')
const modalPlan = document.querySelector('.js-modal-plan')
const modalPlanClose = document.querySelector('.js-close-plan')

function showPlanDoc(){
    modalPlan.classList.add('open')
}

function hiddenPlanDoc(){
    modalPlan.classList.remove('open')
}

planBtn.addEventListener('click', showPlanDoc)
modalPlanClose.addEventListener('click', hiddenPlanDoc)
