const slides = Array.from(document.querySelectorAll('.slider_item'));
const dots = Array.from(document.querySelectorAll('.slider_dot'));
const arrowPrev = document.querySelector('.slider_arrow_prev');
const arrowNext = document.querySelector('.slider_arrow_next');
let targetSlide = 0;

const removeClass = (index) => {
   slides[index].classList.remove('slider_item_active');
   dots[index].classList.remove('slider_dot_active');
}

const addClass = (index) => {
   slides[index].classList.add('slider_item_active');
   dots[index].classList.add('slider_dot_active');
}

arrowNext.onclick = () => {
   removeClass(targetSlide);
   if (targetSlide >= slides.length - 1) targetSlide = -1;
   targetSlide++;
   addClass(targetSlide);
}

arrowPrev.onclick = () => {
   removeClass(targetSlide);
   if (targetSlide === 0) targetSlide = slides.length;
   targetSlide--;
   addClass(targetSlide);
}

dots.forEach((item, index) => {
   item.onclick = () => {
      removeClass(targetSlide);
      targetSlide = index;
      addClass(targetSlide);
   }
})