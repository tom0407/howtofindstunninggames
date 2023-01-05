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

// tool & technology
const toolBtn = document.querySelector('.js-tool')
const modalTool = document.querySelector('.js-modal-tool')
const modalToolClose = document.querySelector('.js-close-tool')

function showToolDoc(){
    modalTool.classList.add('open')
}
function hiddenToolDoc(){
    modalTool.classList.remove('open')
}

toolBtn.addEventListener('click', showToolDoc)
modalToolClose.addEventListener('click', hiddenToolDoc)
// testing
const testingBtn = document.querySelector('.js-testing')
const modalTesting = document.querySelector('.js-modal-testing')
const modalTestingClose = document.querySelector('.js-close-testing')

function showTestingDoc(){
    modalTesting.classList.add('open')
}
function hiddenTestingDoc(){
    modalTesting.classList.remove('open')
}

testingBtn.addEventListener('click',showTestingDoc)
modalTestingClose.addEventListener('click',hiddenTestingDoc)