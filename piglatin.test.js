//we are creating a translater, taking a user input and modifying that string with rules to create pig latin, outputting the result
//each function will handle a different rule
//deal 'else' ask for new input if not a string
//if the word is one vowel, add '-way' to the end.

//declare string variable
const testStr = "Testing a string"
//result of our function -> "testing a-way string
// const plSplit = (str) => {
//     return newArr = str.split(" ")
//
// }
// console.log(plSplit(testStr))

// describe ("plSplit", () => {
//     test ("change string to an array where each word is an index", () => {
//         expect(plSplit(testStr)).toEqual([ 'Testing','a','string' ])
//     })
// })

// var plStartV = (word) => {
//     let vowels = ["a","e","i","o","u"]
//     let splitWord = word.split("")
//     if(vowels.indexOf(splitWord[0])!== -1){
//         return word.concat("-way")
//     }
// }
// console.log(plStartV("a"));

// var plCons = (word) => {
//     let vowels = ["a","e","i","o","u"]
//     let splitWord = word.split("")
//     let newArr = []
//     for (let i = 0; i < splitWord.length; i++){
//         if(vowels.indexOf(splitWord[i])=== -1){
//             newArr.push(splitWord[i])
//             splitWord.shift()
//             i = i - 1
//         } else {
//             newArr = newArr.join("")
//             splitWord = splitWord.join("")
//             return `${splitWord}-${newArr}ay`
//         }
//     }
// }

var plCons = (word) => {
    let vowels = ["a","e","i","o","u"]
    let splitWord = word.split("")
    let posOfFirstV = splitWord.map((value,index) => {
            if(vowels.indexOf(value) !== - 1 ){
                return index
            }else{
                return "No vowels present"
            }
    })
}

console.log(plCons("spleen"));

// const plMain = (words)=>{
//     let splitWords = plSplit(words)
//     console.log(splitWords);
//     let newWords=[]
//     for(let i=0;i<splitWords.length;i++){
//         newWords.push(plStartV(splitWords[i]))
//     }
//     return newWords
// }
// console.log(plMain(testStr));
