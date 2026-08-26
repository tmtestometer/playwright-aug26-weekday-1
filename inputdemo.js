import PromptSync from "prompt-sync"

// PromptSync = class
// "prompt-sync" = library (package)

let prompt = PromptSync();

let a = parseInt(prompt("Enter your rows: "));
for(let i = 1; i <= a; i++){ //i = 1
    let line= "";
    for(let j = 1; j <= i; j++){ // j = 10 times
        line += "* ";
    }
    console.log(line);
}
