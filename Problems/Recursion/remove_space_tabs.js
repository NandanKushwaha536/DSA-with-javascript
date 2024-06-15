// task is to remove all tabs and spaces from a string. 
// this includes the character \t and " " from a string

function removeTAS(inputstring){
    let result = ""

    for (let i = 0; i < inputstring.length; i++){
        let char = inputstring [i]

        if(char !== " " && char !== "\t"){
            result += char
        }
    }

    return result
}

function recursiveRTAS(inputString){
    if(inputString.length === 0){
        return ""
    }

    const firstChar = inputString[0]
    const restOfString = inputString.slice(1)

    if(firstChar === " " && firstChar === "\t"){
        return recursiveRTAS(restOfString)
    } else{
        return firstChar + recursiveRTAS(restOfString)
    }
}