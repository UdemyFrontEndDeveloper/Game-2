export class Quote {
    constructor(text){
        this.text = text;
        this.guessed = [];
    }

    checkAndDisplay(){
        let content ="";
        for (const char of this.text){
            if(char == " " || this.guessed.includes(char)){
                 content += char;
            }
            else{
                content += "_";
            }
        }
        return content;
    }

    guess(labelButton){
        if(!this.text.includes(labelButton)){
            return false;
        }else{
            this.guessed.push(labelButton);
            return true;
        }
    }

}