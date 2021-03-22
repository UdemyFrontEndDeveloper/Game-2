import {Quote} from "./Quote.js"

class Game{

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

    guess(labelButton){
        this.quote.guess(labelButton);
        const content = this.quote.checkAndDisplay();
       this.word.innerHTML = content;
    }

    creatingLetters(){
     for(let i=0; i<26; i++){
        const labelButton = (i+10).toString(36);
        // console.log(labelButton);
        const button = document.createElement("button");
        button.innerHTML = labelButton;
        button.addEventListener("click", () => this.guess(labelButton));
        this.letters.appendChild(button);
        }
    }


    renderText(){
        const content = this.quote.checkAndDisplay();
       this.word.innerHTML = content;
    }

    start() {
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

