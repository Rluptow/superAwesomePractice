
let computerAnswer = 0;
let input = 0;



document.addEventListener("click", (event) => {
    
    let itemThatWasClick = event.target
    input = itemThatWasClick.dataset.number
     computerAnswer = Math.floor(Math.random() * 3);

     if(computerAnswer == 0 )       document.getElementById("Computer").textContent = "Rock";
      if(computerAnswer == 1 )       document.getElementById("Computer").textContent = "Paper";
     if (computerAnswer == 2 )       document.getElementById("Computer").textContent = "Scissors";

     if(input == 0 )       document.getElementById("input").textContent = "Rock";
       if(input == 1 )       document.getElementById("input").textContent = "Paper";
     if (input == 2 )       document.getElementById("input").textContent = "Scissors";



     if(computerAnswer ==  input)document.getElementById("Winner").textContent = "Draw";

     if( computerAnswer ==0 & input == 2) document.getElementById("Winner").textContent = "Computer ";
     if( computerAnswer ==1 & input == 0) document.getElementById("Winner").textContent = "You ";
     if( computerAnswer ==2 & input == 1) document.getElementById("Winner").textContent = "Computer ";
     if( computerAnswer ==2 & input == 0) document.getElementById("Winner").textContent = "You ";
     if( computerAnswer ==0 & input == 1) document.getElementById("Winner").textContent = "You ";
     if( computerAnswer ==1 & input == 2) document.getElementById("Winner").textContent = "You ";






    
})