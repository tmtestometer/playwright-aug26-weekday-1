function printInStarFormat(text){
    console.log("***************************")
    console.log("*",text,"*")
    console.log("***************************")
}

function printInHashFormat(text){
    console.log("###########################")
    console.log("#",text,"#")
    console.log("###########################")
}

function printMyName(text, func){
    func(text)
}

printMyName("vaibhav", printInStarFormat)
printMyName("pooja", printInHashFormat)

