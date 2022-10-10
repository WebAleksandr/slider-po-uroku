const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');


let index = 0;


const activeSlide = n => {
   for (slide of slides) {
      slide.classList.remove('active')
   }
   slides[n].classList.add('active');
}





const activeDot = n => {
   for (dot of dots) {
      dot.classList.remove('active')
   }
   dots[n].classList.add('active');
}

dots.forEach((item, indexdot) => {
   item.addEventListener('click', () => {
      index = indexdot;
      prepareCurrentSlide(index);
   })
});





const prepareCurrentSlide = (ind) => {
   activeSlide(ind);
   activeDot(ind);
}




const nextslide = () => {
   if (index == slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
   } else {
      index++;
      prepareCurrentSlide(index);
   }
}

const prevslide = () => {
   if (index == 0) {
      index = slides.length - 1
      prepareCurrentSlide(index);
   } else {
      index--;
      prepareCurrentSlide(index);
   }
}



next.addEventListener('click', nextslide);
prev.addEventListener('click', prevslide);

setInterval(nextslide, 2000);
