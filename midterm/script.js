const grid = document.getElementById("grid");
const cards = Array.from(grid.children);
const search = document.getElementById("search");
const empty = document.getElementById("empty");
const sortBtn = document.getElementById("sort");
let ascending = true;

// read a card's price as a number (removes £ and commas)
function getPrice(card) {
  const text = card.querySelector(".card-text").textContent;
  return parseFloat(text.replace(/[^0-9.]/g, ""));
}

// Premium label
cards.forEach(card => {
  if (getPrice(card) > 5400) {
    const tag = document.createElement("span");
    tag.className = "badge bg-warning text-dark ms-2";
    tag.textContent = "Premium";
    card.querySelector(".card-title").appendChild(tag);
  }
});

// live search (works with the CSS filter because it hides cards with a class)
function filterCards() {
  const text = search.value.toLowerCase();
  let shown = 0;
  cards.forEach(card => {
    const name = card.querySelector(".card-title").textContent.toLowerCase();
    const match = name.includes(text);
    card.classList.toggle("no-match", !match);
    if (match && getComputedStyle(card).display !== "none") shown++;
  });
  empty.classList.toggle("d-none", shown > 0);
  grid.classList.toggle("d-none", shown === 0);
}

search.addEventListener("input", filterCards);

// re-check when a category radio is changed
document.querySelectorAll("input[name='cat']").forEach(r =>
  r.addEventListener("change", filterCards)
);

// sort by price: first click low to high, then toggles
sortBtn.addEventListener("click", () => {
  const sorted = [...cards].sort((a, b) =>
    ascending ? getPrice(a) - getPrice(b) : getPrice(b) - getPrice(a)
  );
  sorted.forEach(card => grid.appendChild(card));
  ascending = !ascending;
});