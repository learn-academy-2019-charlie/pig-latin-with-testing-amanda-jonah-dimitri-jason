//we are creating a translater, taking a user input and modifying that string with rules to create pig latin, outputting the result
//each function will handle a different rule
//deal 'else' ask for new input if not a string
//if the word is one vowel, add '-way' to the end.

//**TEST SUITE**//

describe ("plSplit", () => {
    test ("change string to an array where each word is an index", () => {
        expect(plSplit("Testing away string quail squeal")).toEqual(expect.arrayContaining(["Testing","away","string"]))
    })
})
describe ("plMain", () => {
    test ("Runs plMain and test the function within", () => {
        expect(plMain("Testing away string quail squeal yellow yay rhythm")).toEqual("estingTay awayway ingstray ailquay ealsquay ellowyay ayyay ythmrhay")
    })
})





//declare string variable
const testStr = "Testing away string quail squeal"
// const is being called in the primary function to split out the string into an array of words.
const plSplit = (str) => {
    return newArr = str.split(" ")
}
// if word starts with vowel run this function
var plStartV = (word) => {
    return word.concat("way")
}
//if the word starts with a consonant then run this function!
var plCons = (word) => {
    let posOfFirstV
    for (let i = 0; i < word.length; i++){
        if(vowels.includes(word.charAt(i))) {
            posOfFirstV = i
            break
        }
    }
    let tail = word.slice(0, posOfFirstV)
    let head = word.slice(posOfFirstV, word.length)
    return `${head}${tail}ay`
}
//If the word starts with a q run this funciton!
var plQ = (word) => {
    let posOfFirstQ

    if(q.includes(word.charAt(0))) {
        posOfFirstQ = 0
    } else if(q.includes(word.charAt(1))){
         posOfFirstQ = 1
     }
    let tailQ = word.slice(0, posOfFirstQ + 2)
    let headQ = word.slice(posOfFirstQ + 2, word.length)
    return `${headQ}${tailQ}ay`
}
//if the word starts with a y run this function!
var plY = (word) => {
    let newWord = word.substr(1,word.length)+word.substr(0,1) +"ay"
    return newWord
}

const vowels = ["a","e","i","o","u","y"]
const q = ["q"]
const plMain = ()=>{
    let words = document.getElementById("user-input").value
    let splitWords = plSplit(words)
    // console.log(splitWords);
    let newWords=[]
    for(let i=0;i<splitWords.length;i++){
        let tempString = splitWords[i]
        // console.log(tempString);
        if("y".includes(tempString.charAt(0))) {
//run *robust const function for y*  to remove all letters up to first vowel and move the end
        newWords.push(plY(tempString))
        }
        else if(vowels.includes(tempString.charAt(0))){
            newWords.push(plStartV(tempString))
        }
// if word starts with qu
        else if(q.includes(tempString.charAt(0)) || q.includes(tempString.charAt(1))) {
            newWords.push(plQ(tempString))
            console.log(newWords);
//run through *qu function** to move both q and u to the end

        }  else if(vowels.includes(tempString.charAt(0)) === false){
//run through *qu function** to move both q and u to the end
            newWords.push(plCons(tempString))
// }else if //the first letter is y
        }else{
            newWords.push("null")
        }
    //
    // else // catch-all if not a string of characters, or whatever

    }
    console.log(newWords);
    document.getElementById("output").innerHTML = newWords.join(" ")
}
console.log("test change github");
// console.log(plMain(testStr))
