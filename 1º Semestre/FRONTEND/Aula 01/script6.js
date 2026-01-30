function reajustar(){
    let preco = Number(document.getElementById('preco').value);
    let resultado = document.getElementById('resultado');
    let Bonus = 0;

    if(preco > 300){
        Bonus = preco * 5/100;
    }
    let precoComBonus = preco+Bonus;

    resultado.innerHTML = `
    Bonus de R$ ${Bonus.toFixed(2)} <br>
    Preço final R$ ${precoComBonus.toFixed(2)}
    `;
}