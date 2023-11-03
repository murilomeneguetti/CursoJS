let num = document.querySelector('#fnum');
let lista = document.querySelector('#flista');
let res = document.querySelector('#res');
let valores = [];

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let opt = document.createElement('option');
        //opt.value = num.value;
        opt.text = `Valor ${num.value} adicionado`;
        lista.appendChild(opt);
        console.log(valores);
        res.innerHTML = '';
    } else {
        window.alert('Valor inválido ou já encontrado na lista.');
    }
    //resetar o input do número e dar foco
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!');
    } else {
        res.innerHTML = '';
        qtd = valores.length;

        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;

        for (let pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos];
            } 
            if (valores[pos] < menor) {
                menor = valores[pos];
            }
            soma += valores[pos];
        }

        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${qtd} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${soma / qtd}.</p>`;


    }
}