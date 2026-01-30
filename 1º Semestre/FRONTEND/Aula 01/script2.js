function reajustar(){
    let preco = Number(document.getElementById('preco').value);
    let resultado = document.getElementById('resultado');
    let Bonus = 0;

    if(preco >= 150){
        Bonus = 0;
    }  else {
        Bonus = 20;
    }
    

    let precoComBonus = preco+Bonus;

    resultado.innerHTML = `
    Bonus de R$ ${Bonus.toFixed(2)} <br>
    Preço final R$ ${precoComBonus.toFixed(2)}
    `;
}