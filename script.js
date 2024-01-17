var cokeBtn = document.getElementById("coke");
var fantaBtn = document.getElementById("fanta");
var amount = document.getElementById("amount");
var quantity = document.getElementById("quantity");
var result = document.getElementById("result");
// creating a global variable to hold the selected drink
let selectedItem = "";
cokeBtn.addEventListener("click", function () {
  alert("coke selected, price : 250 ");
  selectedItem = "coke";
  console.log(selectedItem);
});
fantaBtn.addEventListener("click", function () {
  alert("fanta selected, price : 350 ");
  selectedItem = "fanta";
  console.log(selectedItem);
});
var enter = document.getElementById("enter");
enter.addEventListener("click", function () {
  let fAmount = parseFloat(amount.value);
  let fquantity = parseFloat(quantity.value);
  result.innerHTML = "";
  result.innerHTML = processor(selectedItem, fAmount, fquantity);
});
processor = (selectedItem, amount, quantity) => {
  // checking the amount
  // processing the request
  let res = "";
  if (selectedItem == "coke") {
    if (amount >= 250 * quantity) {
      res = pusher(quantity);
      return res;
    } else {
      res = "Invalid amount";
      return res;
      //alert(res)
    }
  } else if (selectedItem == "fanta") {
    if (amount >= 350 * quantity) {
      res = pusher(quantity);
      return res;
    } else {
      res = "Invalid amount";
      return res;
      //alert(res)
    }
  }
};
pusher = (qty) => {
  var cokeSrc = "Images/coke.jpg";
  var fantaSrc = "Images/fanta.jpg";
  console.log(cokeSrc);
  for (let i = 0; i < qty; i++) {
    let drink = document.createElement("img");
    drink.style.height = "150px";
    drink.style.width = "150px";
    if (selectedItem == "coke") {
      drink.src = cokeSrc;
    } else {
      drink.src = fantaSrc;
    }
    // result.innerHTML = result.innerHTML +` <img src="${drink.src}" id="" class="item">`
    result.appendChild(drink);
  }
  return result.innerHTML;
};
// processor("coke",250,4);
//pusher(10)
