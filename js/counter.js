document.addEventListener("DOMContentLoaded", function () {
  const counterContainer = document.createElement("div");
  counterContainer.classList.add("counter-container");

  const counterText = document.createElement("span");
  counterText.textContent = "Counter:";
  counterText.classList.add("counter-text");

  const countLabel = document.createElement("label");
  countLabel.id = "countLabel";
  countLabel.textContent = "0";
  countLabel.classList.add("count-label");

  const decreaseButton = document.createElement("button");
  decreaseButton.id = "decreaseButton";
  decreaseButton.textContent = "-";
  decreaseButton.classList.add("counter-button");

  const resetButton = document.createElement("button");
  resetButton.id = "resetButton";
  resetButton.textContent = "↻";
  resetButton.classList.add("counter-button");

  const increaseButton = document.createElement("button");
  increaseButton.id = "increaseButton";
  increaseButton.textContent = "+";
  increaseButton.classList.add("counter-button");

  counterContainer.appendChild(counterText);
  counterContainer.appendChild(countLabel);
  counterContainer.appendChild(decreaseButton);
  counterContainer.appendChild(resetButton);
  counterContainer.appendChild(increaseButton);

  document.body.appendChild(counterContainer);

  const footer = document.createElement("footer");
  footer.classList.add("made-by");
  footer.textContent = "Made by Qlx";
  document.body.appendChild(footer);

  let count = 0;

  decreaseButton.onclick = function () {
    count -= 1;
    countLabel.textContent = count;
  };

  resetButton.onclick = function () {
    count = 0;
    countLabel.textContent = count;
  };

  increaseButton.onclick = function () {
    count += 1;
    countLabel.textContent = count;
  };
});
