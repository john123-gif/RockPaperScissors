if(!localStorage.getItem('counter')){
    localStorage.setItem('counter', 0);
}

let score = document.getElementById('score');
let c = localStorage.getItem('counter');

function increase_Score(){
    c++;
    setTimeout(() => {
        score.innerHTML = c;
    }, 2000);
    localStorage.setItem('counter', c);
}
function decrease_Score(){
    c--;
    setTimeout(() => {
        score.innerHTML = c;
    }, 2000);
    localStorage.setItem('counter', c);
}

document.addEventListener('DOMContentLoaded', () => {
    score.innerHTML = localStorage.getItem('counter');
});

/*************STEP 1**************/
let original = document.getElementById('original-interface');
let bonus = document.getElementById('bonus-interface'); 
let toggle_btn = document.getElementById('toggle-btn');

/**List items to be appended in bonus mode */
let li_lizard = document.createElement('li');
let li_spock = document.createElement('li');
li_lizard.appendChild(document.createTextNode('lizard'));
li_spock.appendChild(document.createTextNode('spock'));
li_lizard.setAttribute('class', 'appended_li');
li_spock.setAttribute('class', 'appended_li');

function updateList(){
    let ul = document.getElementById('list');
    ul.appendChild(li_lizard);
    ul.appendChild(li_spock);
    ul.removeAttribute('class','original-list');
    ul.setAttribute('class','bonus-list');
}

function resetList(){
    let ul = document.getElementById('list');
    ul.removeChild(li_lizard);
    ul.removeChild(li_spock);
    ul.removeAttribute('class', 'bonus-list');
    ul.setAttribute('class', 'original-list');
}

function toggleInterface(){
    if(bonus.style.display == 'none'){
        bonus.style.display = 'block';
        toggle_btn.innerHTML = 'Original';
        original.style.display = 'none';
        updateList();
    }
    else {
        bonus.style.display = 'none';
        original.style.display = 'block';
        toggle_btn.innerHTML = 'Bonus';
        resetList();
    }
}
toggle_btn.addEventListener('click', toggleInterface);

/*******************STEP 2/ STEP 3/ STEP 4*****************/
let buttons = document.querySelectorAll('.choice-btn');
let user_choice = document.getElementById('user-choice');
let computer_choice = document.getElementById('computer-choice');
let selection = document.getElementById('selection');
let choice_text = document.getElementById('choice-text');
let p_text =  document.querySelectorAll('.p-text');
let choice = document.querySelectorAll('.choice');
let computer_original = document.querySelectorAll('.original');
let computer_bonus = document.querySelectorAll('.bonus');



function Step2(){
    if(original.style.display !== 'none'|| bonus.style.display !== 'none'){
        original.style.display = 'none';
        bonus.style.display = 'none';
        toggle_btn.style.display = 'none';
        document.getElementById('chained-steps').style.display = 'block';
        document.getElementById('chained-steps').style.margin = 'auto';
        selection.style.justifyContent = 'center';
        choice_text.style.justifyContent = 'center';
        if(screen.width <= 600){
            selection.style.justifyContent = 'space-evenly';
            choice_text.style.justifyContent = 'space-around';
        } else {
            ajustMargin('5rem', '7rem', '3rem', '3rem');
        }
        
    }
}
function ajustMargin(p1, p2, c1, c2){
    p_text[0].style.marginRight = p1;
    p_text[1].style.marginLeft = p2;
    choice[0].style.marginRight = c1;
    choice[1].style.marginLeft = c2;
    return p1, p2, c1, c2;
}
function append(input, location, time){
    if(screen.width <= 600){
        input.style.borderWidth = '1rem';
    } else {
        input.style.borderWidth = '2rem';
    }
    input.style.width = 'inherit';
    input.style.height = 'inherit';
    input.style.position = 'inherit';
    input.disabled = true;
    input.classList.add('disabled');
    setTimeout(() => {
        location.appendChild(input);
    }, time);
    return input, location, time;
}
function disabled(input){
    input.disabled = true;
    input.classList.add('disabled');
    return input;
}

/************user/computer selection***************/
let rand_num = Math.floor(Math.random() * computer_original.length);
let computer = computer_original[rand_num];
let rand_num_b = Math.floor(Math.random() * computer_bonus.length);
let computer_b = computer_bonus[rand_num_b];

buttons.forEach(button => {
    button.addEventListener('click', Step2);
    button.addEventListener('click', () => {
        append(button, user_choice, 0000);
        disabled(button);

        if(button.classList.contains('original')){
            if(computer == button){
               const clone = button.cloneNode(true);
               append(clone, computer_choice, 1000);
            } else {
                append(computer, computer_choice, 1000);
                disabled(computer);
            }   
        }
        if(button.classList.contains('bonus')){
            if(computer_b == button){
                const clone = button.cloneNode(true);
                append(clone, computer_choice, 1000);
            } else {
                append(computer_b, computer_choice, 1000);
                disabled(computer_b);
            }
            
        }
    

        /************decision making***********/
        let user_selection = button.getAttribute('name');
        let playAgain = document.getElementById('replay-display');
        let result = document.getElementById('winner');
        /************original************/
        if(button.classList.contains('original')){
            let computer_selection = computer.getAttribute('name');
            if(user_selection == 'rock' && computer_selection == 'scissors'){
                result.innerHTML = 'you win';
                increase_Score();
            } else if(computer_selection == 'rock' && user_selection == 'scissors'){
                result.innerHTML = 'you lose';
                decrease_Score();
            } else if(user_selection == 'scissors' && computer_selection == 'paper'){
                result.innerHTML = 'you win';
                increase_Score();
            } else if(computer_selection == 'scissors' && user_selection == 'paper'){
                result.innerHTML = 'you lose';
                decrease_Score();
            } else if(user_selection == 'paper' && computer_selection == 'rock'){
                result.innerHTML = 'you win';
                increase_Score();
            } else if(computer_selection == 'paper' && user_selection == 'rock'){
                result.innerHTML = 'you lose';
                decrease_Score();
            } else if(user_selection == 'rock' && computer_selection == 'rock'){
                result.innerHTML = "it's a tie";
            } else if(user_selection == 'paper' && computer_selection == 'paper'){
                result.innerHTML = "it's a tie";
            } else if(user_selection == 'scissors' && computer_selection == 'scissors'){
                result.innerHTML = "it's a tie";
            }
            setTimeout(() => {
                if(result.innerHTML == 'you win'){
                    user_choice.classList.add('ripple');
                } else if(result.innerHTML == 'you lose'){
                    computer_choice.classList.add('ripple');
                }
                if(screen.width <= 600){
                    if(result.innerHTML == 'you win'){
                        user_choice.classList.add('mobile-ripple');
                    } else if(result.innerHTML == 'you lose'){
                        computer_choice.classList.add('mobile-ripple');
                    }
                    selection.style.justifyContent = 'space-evenly';
                    choice_text.style.justifyContent = 'space-around';
                } else {
                    ajustMargin('13rem', '13rem', '3rem', '3rem');
                }
                
                playAgain.style.display = 'block';
            }, 2000);
            
        }
        /************bonus****************/
        if(button.classList.contains('bonus')){
            let computer_selection = computer_b.getAttribute('name');
            if(user_selection == 'scissors' && computer_selection == 'paper'){
                result.innerHTML = 'you win';
                increase_Score();
            } else if(computer_selection == 'scissors' && user_selection == 'paper'){
                result.innerHTML = 'you lose';
                decrease_Score();
            } else if(user_selection == 'paper' && computer_selection == 'rock'){
                result.innerHTML = 'you win';
                increase_Score();
            } else if(computer_selection == 'paper' && user_selection == 'rock'){
                result.innerHTML = 'you lose';
                decrease_Score();
            } else if(user_selection == 'rock' && computer_selection == 'lizard'){
                result.innerHTML = 'you win';
                increase_Score();
            } else if(computer_selection == 'rock' && user_selection == 'lizard'){
                result.innerHTML = 'you lose';
                decrease_Score();
            } else if(user_selection == 'lizard' && computer_selection == 'spock'){
                result.innerHTML = 'you win';
                increase_Score();
            } else if(computer_selection == 'lizard' && user_selection == 'spock'){
                result.innerHTML = 'you lose';
                decrease_Score();
            } else if(user_selection == 'spock' && computer_selection == 'scissors'){
                result.innerHTML = 'you win';
                increase_Score();
            } else if(computer_selection == 'spock' && user_selection == 'scissors'){
                result.innerHTML = 'you lose';
                decrease_Score();
            } /*********innner rule - bonus**********/
            else if(user_selection == 'paper' && computer_selection == 'spock'){
                result.innerHTML = 'you win';
                increase_Score();
            } else if(computer_selection == 'paper' && user_selection == 'spock'){
                result.innerHTML = 'you lose';
                decrease_Score();
            } else if(user_selection == 'scissors' && computer_selection == 'lizard'){
                result.innerHTML = 'you win';
                increase_Score();
            } else if(computer_selection == 'scissors' && user_selection == 'lizard'){
                result.innerHTML = 'you lose';
                decrease_Score();
            } else if(user_selection == 'spock' && computer_selection == 'rock'){
                result.innerHTML = 'you win';
                increase_Score();
            } else if(computer_selection == 'spock' && user_selection == 'rock'){
                result.innerHTML = 'you lose';
                decrease_Score();
            } else if(user_selection == 'lizard' && computer_selection == 'paper'){
                result.innerHTML = 'you win';
                increase_Score();
            } else if(computer_selection == 'lizard' && user_selection == 'paper'){
                result.innerHTML = 'you lose';
                decrease_Score();
            } else if(user_selection == 'rock' && computer_selection == 'scissors'){
                result.innerHTML = 'you win';
                increase_Score();
            } else if(computer_selection == 'rock' && user_selection == 'scissors'){
                result.innerHTML = 'you lose';
                decrease_Score();
            } else if(user_selection == 'rock' && computer_selection == 'rock'){
                result.innerHTML = "it's a tie";
            } else if(user_selection == 'paper' && computer_selection == 'paper'){
                result.innerHTML = "it's a tie";
            } else if(user_selection == 'scissors' && computer_selection == 'scissors'){
                result.innerHTML = "it's a tie";
            } else if(user_selection == 'spock' && computer_selection == 'spock'){
                result.innerHTML = "it's a tie";
            } else if(user_selection == 'lizard' && computer_selection == 'lizard'){
                result.innerHTML = "it's a tie";
            }
            setTimeout(() => {
                if(result.innerHTML == 'you win'){
                    user_choice.classList.add('ripple');
                } else if(result.innerHTML == 'you lose'){
                    computer_choice.classList.add('ripple');
                }
                if(screen.width <= 600){
                    if(result.innerHTML == 'you win'){
                        user_choice.classList.add('mobile-ripple');
                    } else if(result.innerHTML == 'you lose'){
                        computer_choice.classList.add('mobile-ripple');
                    }
                    selection.style.justifyContent = 'space-evenly';
                    choice_text.style.justifyContent = 'space-around';
                } else {
                    ajustMargin('13rem', '13rem', '3rem', '3rem');
                }
                
                playAgain.style.display = 'block';
            }, 2000);
        }
    })

});
function replay(){
   location.reload();
}
document.getElementById('replay-btn').addEventListener('click', replay);


let rules_page = document.getElementById('rules-page');
let rules_info = document.getElementById('rules-info');
function toggleRules(){
    rules_page.style.display = 'block';

    if(original.style.display == 'block'){
        rules_info.setAttribute('class','rules-info-original');

    } else if(bonus.style.display == 'block'){
        rules_info.setAttribute('class','rules-info-bonus');   
    }
}
document.getElementById('rules-btn').addEventListener('click', toggleRules);

document.getElementById('close-btn').onclick = () => {
    rules_page.style.display = 'none';
}