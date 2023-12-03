
const inputBox = document.getElementById("input");


const buttons = document.querySelectorAll("button")


buttons.forEach((button)=>{
    button.addEventListener("click",(e) =>{
        const buttonText = e.target.innerText;
        if(buttonText == "RESET"){
            inputBox.value = "";
        }
        else if(buttonText == "DEL"){
            inputBox.value = inputBox.value.slice(0,-1);
        }
        else if(buttonText == "="){
            try{
                inputBox.value = eval(inputBox.value);
            }
            catch{
                inputBox.value = "Error";
            }
        }
        else if(buttonText == "x"){
            inputBox.value += "*";
            // return;
        }
        else{
            
            inputBox.value += buttonText;
        }
    })
})