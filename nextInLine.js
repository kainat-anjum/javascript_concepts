function nextInLine(arr,numb){
var addNumb=arr.push(numb)
var removeNumb=arr.shift()
console.log(removeNumb)
}

nextInLine([1,2,3,4,5],6)