const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBTN = document.getElementById("convertBtn");
const errorMessage = document.getElementById("errorMessage");
const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");
convertBTN.addEventListener("click",function(){
const inputValue=temperatureInput.value.trim();
const unit=unitSelect.value;
 if (inputValue === "") {
        showError("PLEASE ENTER A TEMPERATURE VALUE");
        return;
}
const temperature=Number(inputValue);
if(!Number.isFinite(temperature))
{
    showError("PLEASE ENTER VALID TEMPERATURE");
    return;
}
let celsius;
if(unit=="Celsius")
{
    celsius=temperature;
}
else if(unit=="Fahrenheit")
{
    celsius=(temperature-32)*5/9;
}
else if(unit=="Kelvin")
{
    celsius=temperature-273.15;
}
if(celsius<-273.15)
{
    showError(
        "TEMPERATURE CANNOT BE BELOW ABSOLUTE ZERO(-273.15°C)"
    );
    return;
}
const farenheit = (celsius*9/5)+32;
const kelvin=celsius+273.15;
celsiusResult.textContent = `${celsius.toFixed(2)} °C`;
fahrenheitResult.textContent = `${farenheit.toFixed(2)} °F`;
kelvinResult.textContent = `${kelvin.toFixed(2)} K`;
errorMessage.textContent="";
});
function showError(message)
{
    errorMessage.textContent=message;
    celsiusResult.textContent="--°C";
    fahrenheitResult.textContent ="--°F";
    kelvinResult.textContent="--K";
}
