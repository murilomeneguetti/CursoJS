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
console.log('------------')
for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log('------------')
//usando in, que tem a mesma funcionalidade de percorrer um vetor
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log('------------')
//buscando em qual posição está um valor
console.log(`O valor 7 está na posição ${num.indexOf(7)}`)
//buscando um valor que não tem no vetor
//quando o valor não existe no vetor, o retorno é -1
console.log(`O valor 4 está na posição ${num.indexOf(4)}`)

let p = num.indexOf();
if (p == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${p}`)
}
