import { Quote } from './Quote.js';
class Game{

    currentStep = 0;
    lastStep = 7;

    quotes = [{
        text: "WordPress",
        categories: "Popularny system zarządzania treścią"
        },
    {
        text: "Afromentals",
        categories: "Zespół muzyczny"
        },
    {
        text: "Swinica",
        categories: "Sczyt w Tatrach"
        },
    {
        text: "Cha cha",
        categories: "Rodzaj tańca"
        },
    {
        text: "Tomasz Karolak",
        categories: "Znany celebryta"
    }];

    constructor({letters, category, word, output}){
        this.letters = letters;
        this.category = category;
        this.word = word;
        this.output = output;

        const {text, categories} = this.quotes[Math.floor(Math.random()*this.quotes.length)];
        this.category.innerHTML = categories;
        this.quote = new Quote(text.toLowerCase());
    }

    guess(letter,e){
        e.target.disabled = true;
        if(this.quote.guess(letter)){
            e.target.style.backgroundColor = "green";
            this.creatingQuote();
        }else{
            this.currentStep++;
            document.getElementsByClassName("step")[this.currentStep].style.opacity = 1;
            e.target.style.backgroundColor = "red";
            if(this.currentStep == this.lastStep){
                this.losing();
            }
        }
        
    }

    creatingLetters(){
    for (let i = 0; i<26; i++){
        const label  = (i+10).toString(36);
        const button = document.createElement("button");
        button.innerHTML = label;
        button.addEventListener("click", (e)=> this.guess(label,e));
        this.letters.appendChild(button);
        }
    }

    creatingQuote(){
        const content = this.quote.getContent();
        this.word.innerHTML = content;
        if(!content.includes("_")){
            this.winning();
        }
    }

    winning() {
        this.word.innerHTML = "SUPER! Odgadnięte :D";
        this.letters.innerHTML = "";
    }

    losing(){
        this.word.innerHTML = "Blisko było.. Spróbuj ponownie";
        this.letters.innerHTML = "";
    }

    start(){
        document.getElementsByClassName("step")[this.currentStep].style.opacity = 1;
        this.creatingLetters();
        this.creatingQuote();
    }

    
}

const game = new Game({
    output: document.getElementById("output"),
    word: document.getElementById("word"),
    category: document.getElementById("category"),
    letters: document.getElementById("letters")
});

game.start();
