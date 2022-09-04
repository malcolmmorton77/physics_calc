//A simple calculator from Javascript Academy: https://www.youtube.com/watch?v=QS6Y0ezhyCs

let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
let pow = "**";

buttons.map((button) => {
    button.addEventListener("click", (e) => {
        // console.log("clicked");
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);

        switch(e.target.innerText){
            case "clear":
                display.innerText = "";
                break; //needs a break, otherwise will leave a "clear" in the display
            case "\u2190":
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                }
                break; //backspace key, written in unicode
            case "=":
                try {
                    display.innerText = eval(display.innerText);
                } catch (error){
                    display.innerText = "Error!"; //sin, cos, and tan all break here
                } break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});