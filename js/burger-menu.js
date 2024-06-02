const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Измените эту строку, чтобы использовать класс вместо id
const menu = document.querySelector(".menu").cloneNode(true);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  // Убедитесь, что popup уже не содержит меню перед его добавлением
  if (!popup.contains(menu)) {
    popup.appendChild(menu);
  }
}

// Это предполагает, что у вас есть ссылки внутри .menu
const links = Array.from(menu.querySelectorAll('li'));

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}
