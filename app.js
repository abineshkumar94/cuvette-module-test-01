document.addEventListener('DOMContentLoaded', () => {
    const btnrules = document.querySelector('.rules-btn');
    const btnclose = document.querySelector('.close-btn');
    const rulemodel = document.querySelector('.rule-model');
    const nextBtn = document.getElementsByClassName("next-btn")
    const stone  = document.getElementsByClassName("stone")
    const scissors  = document.getElementsByClassName("scissors")
    const paper  = document.getElementsByClassName("paper")

    let userChoice;

    const gameControllers = document.getElementsByClassName("choice-btn")

    for (let index = 0; index < gameControllers.length; index++) {
        
        gameControllers[index].addEventListener("click", function gameControllersFN(event) {
            nextBtn[0].style.display = "inline"
        })

    }


    stone[0].addEventListener("click", function stoneclickedFn(e) {
        e.preventDefault
        scissors[0].style.display ="none"
        paper[0].style.display = "none"
        userChoice = "stone"
        pcChoices()


        
    })


    paper[0].addEventListener("click", function stoneclickedFn(e) {
        e.preventDefault
        scissors[0].style.display ="none"
        paper[0].style.display = "none"
        userChoice = "paper"
        pcChoices()


        
    })
 



    function pcChoices(params) {
        /*
         create either stone, paper or scissor using 
         let number = Math.random * 4) 1 0r 2 or 3 

         if( number == 1) 
         1 => stone

         button class="choice-btn" data-choice="stone">
            <div class="choice stone">
                <img src="./images/Group 4.png" alt="stone">
            </div>
        </button>

        if(number == 2)
        2=>
        <button class="choice-btn" data-choice="scissors">
            <div class="choice scissors">
                <img src="./images/Group 2.png" alt="scissors">
            </div>
        </button>
    
        if(number == 3)
        3=>
        <button class="choice-btn" data-choice="paper">
            <div class="choice paper">
                <img src="./images/Group 3.png" alt="paper">
            </div>
        </button>

 // example function (userchoice pcpciked )

        if (stone > sciccors)
        if(sciccors > paper)
        if(paper > stone)

       
        
        */
    }



    btnrules.addEventListener('click', () => {
        rulemodel.style.display = 'block';
    });

    btnclose.addEventListener('click', () => {
        rulemodel.style.display = 'none';
    });



});