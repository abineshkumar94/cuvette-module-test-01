document.addEventListener('DOMContentLoaded', () => {
  const btnrules = document.querySelector('.rules-btn');
  const btnclose = document.querySelector('.close-btn');
  const rulemodel = document.querySelector('.rule-model');
  const choicebuttons = document.querySelectorAll('.choice-btn');
  const resultsdiv = document.querySelector('.results');
  const resultHeadings = document.querySelectorAll('.results_heading');
  const resultdivs = document.querySelectorAll('.results_result');
  const lines = document.querySelectorAll('.line1, .line2, .line3');
  const resultwinner = document.querySelector(".results_winner");
  const resulttext = document.querySelectorAll(".results_text, .ag-pc");  
  
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
    displayResults([choice, pcpick]);
    displaywinner([choice, pcpick]);
    hideChoiceButtons();
    hideLines();
  }

  function pcchoose() {
    const random = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[random];
  }

  function displayResults(results) {
    resultHeadings[0].textContent = "YOU PICKED";
    resultHeadings[1].textContent = "PC PICKED";

    resultdivs[0].innerHTML = `
      <div class="choice ${results[0].name}">
        <img src="${getImagePath(results[0].name)}" alt="${results[0].name}" />
      </div>
    `;

    resultdivs[1].innerHTML = `
      <div class="choice ${results[1].name}">
        <img src="${getImagePath(results[1].name)}" alt="${results[1].name}" />
      </div>
    `;

    resultsdiv.classList.remove('hidden');
  }

  function hideChoiceButtons() {
    choicebuttons.forEach(button => {
      button.style.display = 'none';
    });
  }

  function hideLines() {
    lines.forEach(line => {
      line.style.display = 'none';
    });
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

  function displaywinner(results) {
    setTimeout(() => {
      const userwins = iswinner(results);
      const pcwins = iswinner(results.reverse());

      if (userwins) {
        resulttext[0].innerText = "YOU WIN";
        resultdivs[0].classList.toggle('winner')
      } else if (pcwins) {
        resulttext[0].innerText = "YOU LOST";
        resultdivs[1].classList.toggle('winner')
      } else {
        resulttext[0].innerText = "TIE UP";
      }
    }, 1000); 

    resultwinner.classList.toggle('hidden');
    resultsdiv.classList.toggle('show-winner');
  }
 
  function iswinner(results) {
    return results[0].beats == results[1].name;
  }

  btnrules.addEventListener('click', () => {
    rulemodel.style.display = 'block';
  });

  btnclose.addEventListener('click', () => {
    rulemodel.style.display = 'none';
  });
});

  
  