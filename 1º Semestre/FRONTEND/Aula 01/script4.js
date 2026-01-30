function reajustar(){
    let preco = Number(document.getElementById('preco').value);
    let resultado = document.getElementById('resultado');
    let Bonus = 0;

    if(preco > 100){
        Bonus = preco * 10/100;
    } else {
        Bonus = 0;
    }

    let precoComBonus = preco+Bonus;

    resultado.innerHTML = `
    Bonus de R$ ${Bonus.toFixed(2)} <br>
    Preço final R$ ${precoComBonus.toFixed(2)}
    `;
}