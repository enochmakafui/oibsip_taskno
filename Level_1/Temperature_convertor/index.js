const showAnswer = document.getElementById("answer")
const form = document.querySelector("form");
let answer = null;
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const formData = new FormData(form);

    const dataArray = Array.from(formData);
    console.log(dataArray)

    const [temperatureValue,temperatureType,resultType] = dataArray;
    
    // calculations 
    if(!isNaN(temperatureValue[1])){
        // converting from degrees Celsius to Fahrenheit
        if(temperatureType[1] === "Degrees Celsius" && resultType[1] === "Fahrenheit"){
            answer = ((parseFloat(temperatureValue[1]) * 9/5) + 32).toFixed(2);
            showAnswer.textContent = answer;
        }
        // converting from degrees Celsius to Kelvin
        if(temperatureType[1] === "Degrees Celsius" && resultType[1] === "Kelvin"){
            answer = (parseFloat(temperatureValue[1]) + 273.15).toFixed(2);
            showAnswer.textContent = answer;
        }
        // converting from Fahrenheit to Degrees Celsius
        if(temperatureType[1] === "Fahrenheit" && resultType[1] === "Degrees Celsius"){
            answer = ((parseFloat(temperatureValue[1]) - 32) * 5/9).toFixed(2);
            showAnswer.textContent = answer;
        }
        // converting from Fahrenheit to Kelvin
        if(temperatureType[1] === "Fahrenheit" && resultType[1] === "Kelvin"){
            answer = ((parseFloat(temperatureValue[1]) - 32) * 5/9 + 273.15).toFixed(2);
            showAnswer.textContent = answer;
        }
        // converting from Kelvin to Degrees Celsius
        if(temperatureType[1] === "Kelvin" && resultType[1] === "Degrees Celsius"){
            answer = (parseFloat(temperatureValue[1]) - 273.15).toFixed(2);
            showAnswer.textContent = answer;
        }
        // converting from Kelvin to Fahrenheit
        if(temperatureType[1] === "Kelvin" && resultType[1] === "Fahrenheit"){
            answer = ((parseFloat(temperatureValue[1]) - 273.15) * 9/5 + 32).toFixed(2);
            showAnswer.textContent = answer;
        }

        // converting between same values 
        if(temperatureType[1] === resultType[1]){
            answer = temperatureValue[1]
            showAnswer.textContent = answer;
        }
    }
    else {
    alert("Please enter a number")
    }
})



            


           

       

    
