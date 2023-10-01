let num = [5, 8, 2, 9, 3]

//console.log(`Nosso vetor é o ${num}`);
console.log(num);

//acrescentar direto em um índice
num[5] = 6;
console.log(num);

//acrescentar no final do vetor
num.push(7);
console.log(num);

//comprimento do vetor
console.log(`O vetor tem o tamanho igual a ${num.length}`)

//ordenar o vetor em ordem crescente
num.sort();
console.log(`Vetor ordenado: ${num}`);

//pegando o valor de um índice específico
console.log(`O primeiro valor do vetor é ${num[0]}`)

//repetições para arrays
for(let pos in num){
    console.log(num[pos])
}
console.log('------------')
for(let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}