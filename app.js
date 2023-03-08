const input = document.getElementById("input");
const numberContainer = document.getElementById("number");
const computerNum = document.getElementById("computer");
const guessNumber = () => {
  numberContainer.classList.add("show");
  let comp = Math.floor(Math.random()*10);
  if(parseFloat(input.value) === comp){
     alert("you guessed right")
     computerNum.innerHTML = comp
     input.value = ""
  } else if(parseFloat(input.value) === comp-1 || parseFloat(input.value) === comp+1){
    alert("you were close")
    computerNum.innerHTML = comp
    input.value = ""
  } else{
      alert("you guessed wrong");
      computerNum.innerHTML = comp
      input.value = ""
  }
}
