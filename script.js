//to get an element in the html we don't put anything but the name of the element.
const placement = document.querySelectorAll("img");
const text = document.querySelector(".decision");


function random(){
    const player1 = Math.floor(Math.random()*6) + 1;
    const player2 = Math.floor(Math.random()*6) + 1;    

    const image1 = "dice" + player1 + ".png";
    const image2 = "dice" + player2 + ".png";
    /*
    we are going to use the setAttribute to set an attribute:
        element.setAttribute("style", "value")
    */
    placement[0].setAttribute("src", image1);
    placement[1].setAttribute("src", image2);

    if (player1 == player2) {
        //inner text is used to replace the text in the element text.
        text.innerText = "you win. Congratulations";
    }else{
        text.innerText = "you almost did it.Try again";
    }

}

function play() {
    const player2 = Math.floor(Math.random()*6) + 1;   
    const input = document.querySelector(".form");
    if (input.value <= 6) {
         //the input.value will get the value from the input and convert to integer
        const image1 = "dice" + parseInt(input.value) + ".png";
        console.log(image1);
        const image2 = "dice" + player2 + ".png";

        placement[0].setAttribute("src", image1);
        placement[1].setAttribute("src", image2);

        if (parseInt(input.value) == player2) {
            //inner text is used to replace the text in the element text.
            text.innerText = "you win. Congratulations";
        }else{
            text.innerText = "you almost did it.Try again";
        }

    }else{
        text.innerText = "the value entered is not usable";
    }
}