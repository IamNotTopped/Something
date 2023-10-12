// var arr = ['olma','nok','banan','olma','nok','tarvuz']

// function DeleteMeva(name){
//     arr = arr.filter(item => item !== name)
// }
// DeleteMeva('olma')

// console.log(arr);


const array = ['fozil'].join('')

const reversedArray = [] 

for(let i = array.length - 1; i >= 0; i--) {

const valueAtIndex = array[i]

reversedArray.push(valueAtIndex)

}

console.log(reversedArray)
