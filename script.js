const display = document.getElementById("display");

function appendtoDisplay(input){
    display.value += input;

}
function clearDisplay(){
    document.getElementById("display").value = '';
}
function equals(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}