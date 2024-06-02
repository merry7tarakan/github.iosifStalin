let slideIndex = 1; // Начинаем с первого слайда
showSlides(slideIndex);

// Функция для добавления или вычитания индекса слайда
function changeSlide(n) {
  showSlides(slideIndex += n);
}

// Основная функция для отображения слайдов
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1} // Если n больше количества слайдов, возвращаемся к первому
  if (n < 1) {slideIndex = slides.length} // Если n меньше 1, переходим к последнему слайду
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; // Скрываем все слайды
  }
  slides[slideIndex-1].style.display = "block"; // Показываем текущий слайд
}