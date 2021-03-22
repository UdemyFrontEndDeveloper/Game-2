import {Quote} from "./Quote.js"

class Game{

    currentStep = 0;
    lastStep = 7;

    quotes=[{
        text: "bla bla bla",
        categoryQ: "siemano",
    },
        {
        text: "ble ble ble",
        categoryQ: "witam",
    },
        {
        text: "blu blu blu",
        categoryQ: "dobry",
    },
        {
        text: "bli bli bli",
        categoryQ: "elo",
    }];

    constructor({output,word,category,letters}){
        this.output = output;
        this.word = word;
        this.category = category;
        this.letters = letters;

        const {text,categoryQ}= this.quotes[Math.floor(Math.random()*this.quotes.length)];
        this.category.innerHTML = categoryQ;
        this.quote = new Quote(text.toLocaleLowerCase());
    }

    guess(labelButton,e){
        e.target.disabled = true;
        if(this.quote.guess(labelButton)){
        this.renderText();
        }else{
            this.currentStep++;
            document.getElementsByClassName("step")[this.currentStep].style.opacity = 1;
            if(this.currentStep == this.lastStep){
                this.losing();
            }
        }
    }

    creatingLetters(){
     for(let i=0; i<26; i++){
        const labelButton = (i+10).toString(36);
        // console.log(labelButton);
        const button = document.createElement("button");
        button.innerHTML = labelButton;
        button.addEventListener("click", (e) => this.guess(labelButton,e));
        this.letters.appendChild(button);
        }
    }


    renderText(){
        const content = this.quote.checkAndDisplay();
       this.word.innerHTML = content;
       if(!content.includes("_")){
           this.winning();
       }
    }

    winning(){
        this.word.innerHTML = "Odgadłeś! Brawo";
        this.letters.innerHTML = "";
    }

    losing(){
        this.word.innerHTML = "Niestety nie odgadłeś, spróbuj jeszcze raz!";
        this.letters.innerHTML = "";
    }

    start() {
        document.getElementsByClassName("step")[this.currentStep].style.opacity = 1;
       this.creatingLetters();
       this.renderText();
    }
}



const game = new Game({
    output: document.getElementById("output"),
    word: document.getElementById("word"),
    category: document.getElementById("category"),
    letters: document.getElementById("letters"),
});

game.start();

