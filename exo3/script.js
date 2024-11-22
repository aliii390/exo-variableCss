const spacing = document.getElementById("spacing");

const blour = document.getElementById("blur");

const color = document.getElementById("color");
const root = document.documentElement;




color.addEventListener("input", handleInput);

spacing.addEventListener("input", handleSpacing);

blour.addEventListener("input", handleBlour)



function handleInput(event){
  root.style.setProperty('--color',  event.target.value);
}


function handleSpacing(event){
    root.style.setProperty('--spacing', event.target.value + "vh");
    
    
}


function handleBlour(event){
    root.style.setProperty('--blur', event.target.value + "vh");
}
