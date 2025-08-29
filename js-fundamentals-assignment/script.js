function greetUser() {
  let name = document.getElementById("userName").value;
  if (name) {
    document.getElementById("greeting").textContent = "Hello, " + name + "!";
  } else {
    document.getElementById("greeting").textContent = "Please enter your name!";
  }
}

function calculateTotal(a, b) {
  return a + b;
}

function showTotal() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let total = calculateTotal(num1, num2);
  document.getElementById("totalResult").textContent = "Total: " + total;
}

function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = "";
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

function toggleColor() {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightyellow" ? "white" : "lightyellow";
}

function addItem() {
  let list = document.getElementById("itemList");
  let li = document.createElement("li");
  li.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(li);
}
