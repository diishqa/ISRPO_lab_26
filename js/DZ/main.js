const rub = document.getElementById("rub");
const val = document.getElementById("val");
const btn = document.getElementById("btn");
const rez = document.getElementById("rez");
btn.onclick = function() {
    let rubli = Number(rub.value);
    if (rubli <= 0) {
        rez.innerHTML = "Введите число больше 0";
        return;
    }
    let kurs = 0;
    if (val.value === "USD") kurs = 92.5;
    if (val.value === "EUR") kurs = 100.2;
    if (val.value === "GBP") kurs = 118.3;
    let result = rubli / kurs;
    rez.innerHTML = rubli + " руб = " + result.toFixed(2) + " " + val.value;
};