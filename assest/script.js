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
const modalAim = document.querySelector('.js-modal')
const modalCloseAim = document.querySelector('.js-close-aim')

function showAimDoc(){
    modalAim.classList.add('open')
}
function hiddenAimDoc(){
    modalAim.classList.remove('open')
}

aimBtn.addEventListener('click',showAimDoc)
modalCloseAim.addEventListener('click',hiddenAimDoc)
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

// topic
const topicBtn = document.querySelector('.js-topic')
const modalTopic = document.querySelector('.js-modal-topic')
const modalTopicClose = document.querySelector('.js-close-topic')

function showTopicDoc(){
    modalTopic.classList.add('open')
}
function hiddenTopicDoc(){
    modalTopic.classList.remove('open')
}

topicBtn.addEventListener('click',showTopicDoc)
modalTopicClose.addEventListener('click', hiddenTopicDoc)
// motivation 
// initualize variable
const motiBtn = document.querySelector('.js-motivation')
const modalMoti = document.querySelector('.js-motivation-modal')
const modalCloseMoti = document.querySelector('.js-close-motivation')

// function to show motivation content
function showMotiDoc(){
    modalMoti.classList.add('open')
}
// function to close motivation 
function hiddenMotiDoc(){
    modalMoti.classList.remove('open')
}

motiBtn.addEventListener('click',showMotiDoc)
modalCloseMoti.addEventListener('click',hiddenMotiDoc)

const landsBtn = document.querySelector('.js-landscape')
const modalLands = document.querySelector('.js-landscape-modal')
const modalCloseLands = document.querySelector('.js-close-landscape')

// function to show Landscape content
function showLandsDoc(){
    modalLands.classList.add('open')
}
// function to close landscape
function hiddenLandsiDoc(){
    modalLands.classList.remove('open')
}

landsBtn.addEventListener('click',showLandsDoc)
modalCloseLands.addEventListener('click',hiddenLandsiDoc)

//Risk button
const riskBtn = document.querySelector('.js-risk')
const modalRisk = document.querySelector('.js-modal-risk')
const modalCloseRisk = document.querySelector('.js-close-risk')

function showRiskDoc(){
    modalRisk.classList.add('open')
}

function hiddenRiskDoc(){
    modalRisk.classList.remove('open')
}

riskBtn.addEventListener('click',showRiskDoc)
modalCloseRisk.addEventListener('click',hiddenRiskDoc)
// communication
const comBtn = document.querySelector('.js-com')
const modalCom = document.querySelector('.js-com-modal')
const modalCloseCom = document.querySelector('.js-close-com')

function showComDoc(){
    modalCom.classList.add('open')
}

function hiddenComDoc(){
    modalCom.classList.remove('open')
}

comBtn.addEventListener('click',showComDoc)
modalCloseCom.addEventListener('click',hiddenComDoc)
// plan-progress
const progressBtn = document.querySelector('.js-progress')
const modalProgress = document.querySelector('.js-modal-progress')
const modalCloseProgress = document.querySelector('.js-close-progress')

function showProgressDoc() {
    modalProgress.classList.add('open')
}

function hiddenProgressDoc() {
    modalProgress.classList.remove('open')
}

progressBtn.addEventListener('click',showProgressDoc)
modalCloseProgress.addEventListener('click',hiddenProgressDoc)
// scope 
const scopeBtn = document.querySelector('.js-scope')
const scopeModal = document.querySelector('.js-modal-scope')
const scopeCloseModal = document.querySelector('.js-close-scope')

function showScopeDoc() {
    scopeModal.classList.add('open')
}

function hiddenScopeDoc() {
    scopeModal.classList.remove('open')
}

scopeBtn.addEventListener('click',showScopeDoc)
scopeCloseModal.addEventListener('click',hiddenScopeDoc)