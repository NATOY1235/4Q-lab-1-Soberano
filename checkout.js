window.onload = function() {

let params = new URLSearchParams(window.location.search);

let name = params.get("name");
let undershirt = Number(params.get("undershirt"));
let sweatpants = Number(params.get("sweatpants"));
let money = Number(params.get("money"));

let undershirtPrice = 200;
let sweatpantsPrice = 350;

let total = (undershirt * undershirtPrice) + (sweatpants * sweatpantsPrice);

let output = "Hello " + name + "<br>";
output += "Total Cost: ₱" + total + "<br>";

if (money >= total) {
    let change = money - total;
    output += "Your Change: ₱" + change;
} else {
    output += "Sorry, you do not have enough money.";
}

document.getElementById("result").innerHTML = output;

};
