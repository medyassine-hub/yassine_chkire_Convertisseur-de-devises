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
async function convert() {
    let amount = parseFloat(document.getElementById("amount").value);
    let from = document.getElementById("from-currency").value;
    let to = document.getElementById("toCurrency").value;

    if (isNaN(amount)) {
        resultDiv.textContent = "Veuillez entrer un montant valide.";
        return;
    }

    try {
        let response = await fetch(`https://api.exchangerate.host/latest?base=${from}&symbols=${to}`);
        if (!response.ok) throw new Error("API non disponible");

        let data = await response.json();
        let rate = data.rates[to];

        if (!rate) {
            resultDiv.textContent = "Erreur : devise non trouvée dans l'API.";
            return;
        }

        let convertedAmount = amount * rate;
        afficherResultat(amount, from, convertedAmount, to, rate);

    } catch (error) {
        resultDiv.textContent = "Erreur lors de la récupération des taux.";
        console.error(error);
    }
}


let savebtn=document.getElementById("saveBtn");
let historylist=document.getElementById("historyList");
function affichehistorique(){
    let historique=JSON.parse(localStorage.getItem("historique")) || [];
    historylist.innerHTML="";
    if (historique.length==0){
        historylist.innerHTML="<p>Aucune conversion sauvegardée</p>"
    }
    historique.forEach(item => {
        let p=document.createElement("p");
        p.textContent=item;
        historylist.appendChild(p);
    });

};
savebtn.addEventListener("click",function(){
    convert();
    let ResultText=resultDiv.textContent.trim();
    if (ResultText === "") return;
    let historique = JSON.parse(localStorage.getItem("historique")) || [];
    historique.push(ResultText);
    localStorage.setItem("historique", JSON.stringify(historique));
    affichehistorique();

});
affichehistorique();
let clearbtn=document.getElementById("clearHistory");
clearbtn.addEventListener("click", function() {
    localStorage.removeItem("historique");
    historylist.innerHTML = "<p>Aucune conversion sauvegardée</p>";
});


