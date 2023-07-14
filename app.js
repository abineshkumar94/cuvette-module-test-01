document.addEventListener('DOMContentLoaded', () => {
    const btnrules = document.querySelector('.rules-btn');
    const btnclose = document.querySelector('.close-btn');
    const rulemodel = document.querySelector('.rule-model');
    const choicebuttons = document.querySelectorAll('.choice-btn');
    const gamediv = document.querySelector('.game');
    const resultsdiv = document.querySelector('.results');
    const resultdivs = document.querySelectorAll('.results_result');

    const CHOICES = [
        {
            name: "paper",
            beats: "rock"
        },
        {
            name: "scissors",
            beats: "paper"
        },
        {
            name: "rock",
            beats: "scissors"
        },
    ];

    choicebuttons.forEach(button => {
        button.addEventListener('click', () => {
            const choicename = button.dataset.choice;
            const choice = CHOICES.find(choice => choice.name === choicename);
            choose(choice);
        });
    });

    function choose(choice) {
        const pcpick = pcchoose();
        displayresults([choice, pcpick]);
    }

    function pcchoose() {
        const random = Math.floor(Math.random() * CHOICES.length);
        return CHOICES[random];
    }

    function displayresults(results) {
        let counter = 0;
        const interval = setInterval(() => {
            if (counter >= resultdivs.length) {
                clearInterval(interval);
                gamediv.classList.toggle('hidden');
                resultsdiv.classList.toggle('hidden');
                return;
    
   }

    function getImagePath(choiceName) {
        const imgElements = document.querySelectorAll('.choice img');
            for (let i = 0; i < imgElements.length; i++) {
                const imgElement = imgElements[i];
            if (imgElement.alt.toLowerCase().includes(choiceName.toLowerCase())) {
                return imgElement.src;
                }
            }
                return '';
    }

            resultdivs[counter].innerHTML = `
                <div class="choice ${results[counter].name}">
                    <img src="${getImagePath(results[counter].name)}" alt="${results[counter].name}" />
                </div>
            `;
            counter++;
        }, 1000);
    }



 
    
    btnrules.addEventListener('click', () => {
        rulemodel.style.display = 'block';
    });

    btnclose.addEventListener('click', () => {
        rulemodel.style.display = 'none';
    });
});
