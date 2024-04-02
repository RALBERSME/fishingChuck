document.getElementById("Tiramisu").onclick = function () {
  document.getElementById(
    "showPrice"
  ).innerHTML = `Cute Choice Tiramisu costs just 10 USD today`;
};
document.getElementById("IceCream").onclick = function () {
  document.getElementById(
    "showPrice"
  ).innerHTML = `Ice-Cream each 2.5 USD, vanilla and lemon`;
};
document.getElementById("ChocolatePudding").onclick = function () {
  document.getElementById(
    "showPrice"
  ).innerHTML = `Our dream - Chocolate Pudding costs 5.5 USD`;
};

var meineElemente = document.getElementsByClassName("fish");
let showPrice = document.getElementById("showPrice");

for (var i = 0; i < meineElemente.length; i++) {
  meineElemente[i].onclick = function () {
    showPrice.style = "color:red";
    showPrice.innerHTML = `NO WAY - Fishermen shall eat their fishing harvest!`;
    setTimeout(() => (showPrice.style = "color:black"), 500);
  };
}
document.getElementById("coffee").onclick = function () {
  document.getElementById(
    "showPrice"
  ).innerHTML = `American Coffee for 3.5 USD`;
};
document.getElementById("latte").onclick = function () {
  document.getElementById(
    "showPrice"
  ).innerHTML = `Italian Latte costs 4.5 USD`;
};
document.getElementById("cappuccino").onclick = function () {
  document.getElementById(
    "showPrice"
  ).innerHTML = `Yummy - Cappuccino for 5 USD`;
};
document.getElementById("minestone").onclick = function () {
  document.getElementById(
    "showPrice"
  ).innerHTML = `Sorry, Minestone is not available.`;
};
document.getElementById("tomatoe").onclick = function () {
  document.getElementById(
    "showPrice"
  ).innerHTML = `Instead of tomatoe go for bean soup; it's better.`;
};
document.getElementById("bean").onclick = function () {
  document.getElementById(
    "showPrice"
  ).innerHTML = `Bean soup for 1.90 USD per spoon.`;
};
document.getElementById("beer").onclick = function () {
  document.getElementById("showPrice").innerHTML = `Beer for 4.90 USD`;
};
document.getElementById("rwine").onclick = function () {
  document.getElementById(
    "showPrice"
  ).innerHTML = `Red Wine from France 14 USD`;
};
document.getElementById("wwine").onclick = function () {
  document.getElementById(
    "showPrice"
  ).innerHTML = `White Wine from Switzerland (reimport) 150 USD`;
};
