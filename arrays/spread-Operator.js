function teste (x,y,z) {
    return console.log(x,y,z)
}
var args = [9,5,6]
// teste(...args)

//espalhamento em arrays literais 

const Names = ["Kanye","Yeezus"]
const Names2 = [ "Ye", "Yeezy",...Names];

// console.log(Names)
// console.log(Names2)

//Copiando um Array Usando spread 


const array = [8,5,6,7,8]
const copia = [...array]
copia.push(8)

console.log(array)
console.log(copia)