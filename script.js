const rollButton = document.getElementById("rollButton");
const diceResults = document.getElementById("diceResults");
const totalResult = document.getElementById("totalResult");

function rollDie(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function createDie(value, isQuality = false) {
  const die = document.createElement("div");
  die.classList.add("die");

  if (isQuality) {
    die.classList.add("quality");
  } else {
    die.classList.add("normal");
  }

  die.textContent = value;

  return die;
}

function rollThreeD10() {
  const quality = rollDie(10);

  const diceA = rollDie(10);
  const diceB = rollDie(10);

  const qualityDice = [diceA, diceB].sort((a, b) => b - a);

  const rolls = [quality, ...qualityDice];
  const total = rolls.reduce((sum, value) => sum + value, 0);

  diceResults.innerHTML = "";

  diceResults.appendChild(createDie(quality, true));

  qualityDice.forEach(value => {
    diceResults.appendChild(createDie(value));
  });

  totalResult.textContent = `Total: ${total}`;
}

rollButton.addEventListener("click", rollThreeD10);