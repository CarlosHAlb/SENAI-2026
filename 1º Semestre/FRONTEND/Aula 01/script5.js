function reajustar(){
    let preco = Number(document.getElementById('preco').value);
    let dias = Number(document.getElementById('preco').value);
    let resultado = document.getElementById('resultado');
    let Atraso = 0;

    if(dias > 0){
        atraso = preco * 2/100;
    }
    let precoComAtraso = preco-atraso;

    resultado.innerHTML = `
    Bonus de R$ ${atraso.toFixed(2)} <br>
    Preço final R$ ${precoComAtraso.toFixed(2)}
    `;
}