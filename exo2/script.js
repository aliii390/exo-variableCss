const input = document.getElementById("chooser");
const root = document.documentElement;



input.addEventListener("input", handleInput);



function handleInput(event){
 root.style.setProperty('--bg-color',  event.target.value);
 

}

