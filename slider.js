/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;

/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);


/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}
/**
 * @property {showSlides} [slideIndex += 1]
 * @returns {object}

 */

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);  
}
/**
 * @property {showSlides} [slideIndex -= 1]
 * @returns {object}

 */



/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}
/**
 * @param {number} n 
 * @property {showSlides} [slideIndex = n]
 * @returns {object}

 */


/**
 * Это описание функции showSlides
 * @param {number} n- количество
 * @description Функция перелистывания
 *  @property {number} [slideIndex=1]
 * @property {number} [slideIndex=slides.length]
 * @returns {object}

 */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");
    
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";    
}