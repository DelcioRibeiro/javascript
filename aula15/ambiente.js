let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do Vetor é ${num[0]}`)
let pos = num.indexOf(8                                                                                                                                                                                                                                                         )
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor esta na posição ${pos}`)
}
