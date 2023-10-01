function parimpar(n) {
    if (n%2 == 0) {
        return 'Par';
    } else {
        return 'Ímpar'
    }
}

//quando um parametro deve ter como padrão o valor 0, coloca n1=0
//se passar somente um parametro, o outro terá o valor 0
function soma(n1=0, n2=0) {
    return n1 + n2;
}

console.log(parimpar(222))
console.log('-------')
console.log(soma(2,7))
console.log('-------')
console.log(soma(2))

//salvando uma função em uma variável
let v = function(x) {
    return x*2;
}
//passa o parâmetro para a variável
console.log('-------')
console.log(v(5))

//verificar sobre as arrow funcions, que usam =>

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c;
    }
    return fat
}

//função recursiva, que chama ela mesma
function recfatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * recfatorial(n-1)
    }
}

console.log('-------')
console.log(fatorial(5))
console.log(recfatorial(5))