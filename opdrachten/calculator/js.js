function uitkomst() {
  const operator = document.querySelector("#operators").value;
  const n1 = parseInt(document.querySelector("#n1").value);
  const n2 = parseInt(document.getElementById("n2").value);
  const totaal = document.querySelector("#totaal");

  /*if (operator === "+") {
    totaal.textContent = n1 + n2;
  } else if (operator === "x") {
    totaal.textContent = n1 * n2;
  } else if (operator === "/") {
    totaal.textContent = n1 / n2;
  } else totaal.textContent = n1 - n2;
*/

  switch (operator) {
    case "+":
      totaal.textContent = n1 + n2;
      break;
    case "-":
      totaal.textContent = n1 - n2;
      break;
    case "x":
      totaal.textContent = n1 * n2;
      break;
    case "/":
      totaal.textContent = n1 / n2;
      break;
    case "macht":
      totaal.textContent = Math.pow(n1, n2);
      break;
    case "wortel":
      totaal.textContent = Math.sqrt(n1, n2);
  }
}
