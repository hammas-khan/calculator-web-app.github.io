let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
var snd = new Audio("click.mp3");
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        snd.play();
        snd.currentTime=0;
        buttonText = e.target.innerText;
        console.log(buttonText);
        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == 'D'){
            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}