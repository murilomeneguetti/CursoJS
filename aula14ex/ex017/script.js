function tabuada() {
    let num = document.getElementById('numero');
    let tab = document.getElementById('seltab');

    if (num.value.length == 0) {
        window.alert('Obrigatório informar um número.')
    } else {
        let n = Number(num.value);
        tab.innerHTML = '';
        for(let i = 0; i <= 10; i++){
            //res.innerHTML += `${i} x ${n} || `;
            let item = document.createElement('option');
            item.text = `${n} x ${i} = ${n*i}`;
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
    

}
