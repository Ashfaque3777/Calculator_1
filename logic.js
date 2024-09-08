const display = document.getElementById("answer");

function toggleSign() {
  if (display.value.startsWith("-")) {
    display.value = display.value.slice(1);
  } else if (display.value !== "") {
    display.value = "-" + display.value;
  }
}

function appendDot() {
  const currentValue = display.value;
  const lastNumber = currentValue.split(/[\+\-\*\/]/).pop();
  if (!lastNumber.includes(".")) {
    display.value += ".";
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}
