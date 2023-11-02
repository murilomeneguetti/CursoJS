function contar() {
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passo');
    var res = document.querySelector('div#res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar. Obrigatório preencher os campos Início, Fim e Passo.';
    } else {
        res.innerHTML = 'Contando: ';
        let ni = Number(inicio.value);
        let nf = Number(fim.value);
        let np = Number(passo.value);
        if (np <= 0) {
            window.alert('Passo inválido! Considerando passo 1');
            np = 1;
        } 
        if (ni <= nf) {
            for (let i = ni; i <= nf; i += np){
                res.innerHTML += `${i} \u{1F449}`;
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            for (let i = ni; i >= nf; i -= np){
                res.innerHTML += `${i} \u{1F449}`;
            }
            res.innerHTML += `\u{1F3C1}`
        }


    }


}