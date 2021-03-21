class Game{
    constructor({output,word,category,letters}){
        this.output = output;
        this.word = word;
        this.category = category;
        this.letters = letters;
    }

    guess(labelButton){
        console.log(labelButton)
    }

    start() {
        for(let i=0; i<26; i++){
        const labelButton = (i+10).toString(36);
        // console.log(labelButton);
        const button = document.createElement("button");
        button.innerHTML = labelButton;
        button.addEventListener("click", () => this.guess(labelButton));
        this.letters.appendChild(button);
        }
    }
}



const game = new Game({
    output: document.getElementById("output"),
    word: document.getElementById("word"),
    category: document.getElementById("category"),
    letters: document.getElementById("letters"),
});

game.start();

