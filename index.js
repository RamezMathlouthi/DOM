const ButtonMoins = document.querySelectorAll(".minus");
const ButtonPlus = document.querySelectorAll(".plus");
const TotalSum = document.querySelector("#sum");
const DeleteButton = document.querySelectorAll(".btn-primary");
const QuantitiesButton = document.querySelectorAll(".x");
const Prix = document.querySelectorAll(".price");
const Card = document.querySelectorAll(".card");
for (let i = 0; i < ButtonMoins.length; i++) {
    ButtonMoins[i].addEventListener("click", function(e) {
        if (QuantitiesButton[i].innerHTML > 0) {
            QuantitiesButton[i].innerHTML--;
            TotalSum.textContent =
                parseInt(TotalSum.textContent) - parseInt(Prix[i].innerHTML);
        }
    });
}

for (let i = 0; i < ButtonMoins.length; i++) {
    ButtonPlus[i].addEventListener("click", function(e) {
        QuantitiesButton[i].innerHTML++;
        TotalSum.textContent =
            parseInt(TotalSum.textContent) + parseInt(Prix[i].innerHTML);
    });
}
for (let i = 0; i < DeleteButton.length; i++) {
    DeleteButton[i].addEventListener("click", function(e) {
        bigDivs[i].remove();
        TotalSum.textContent =
            parseInt(TotalSum.textContent) -
            parseInt(QuantitiesButton[i].textContent) *
            parseInt(Prix[i].textContent);
    });
}