let btn=document.getElementById("swapBtn");
btn.addEventListener('click',function(){
    let depart=document.getElementById("from-currency");
    let cible=document.getElementById("toCurrency");
    let temp=depart.value;
    depart.value=cible.value;
    cible.value=temp;
    convert();
});
let convertBtn = document.getElementById("convert-btn");
let resultDiv = document.getElementById("result");
const rates = {
    EUR: 1,
    USD: 1.1,
    TUN: 3.3,
    JPY: 150,
    CAD: 1.5,
    CHF: 1.05,
    AUD: 1.6
};
function afficherResultat(montant, deviseDepart, resultat, deviseCible, taux) {
    let divResultat = document.getElementById("result");
    divResultat.innerHTML = 
        montant + " " + deviseDepart + " = " + 
        "<span style='color: #ff6b4a;'>" + resultat + " " + deviseCible + "</span>" +
        "<div style='font-size: 14px; margin-top: 5px; color: #6b8cbc;'>" +
        "Taux: 1 " + deviseDepart + " = " + taux.toFixed(4) + " " + deviseCible +
        "</div>";
}
convertBtn.addEventListener("click",convert);
 function convert() {
    let amount = parseFloat(document.getElementById("amount").value);
    let from = document.getElementById("from-currency").value;
    let to = document.getElementById("toCurrency").value;
    if (isNaN(amount)) {
        resultDiv.textContent = "Veuillez entrer un montant valide.";
        return;
    }
    let convertedAmount = (amount / rates[from]) * rates[to];
    afficherResultat(amount,from,convertedAmount,to,rates[from])
}

