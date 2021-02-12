const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');
const quote = document.querySelectorAll('.quote');

let index = 0;

const activeClass = (idx, nods) => {
  for (nod of nods) {
    nod.classList.remove('active');
  }
  nods[idx].classList.add('active');
};

const nextSlide = () => {
  if (index === slides.length - 1) {
    index = 0;
    activeClass(index, slides);
    activeClass(index, quote);
  } else {
    index++;
    activeClass(index, slides);
    activeClass(index, quote);
  }
};

const prevSlide = () => {
  if (index === 0) {
    index = slides.length - 1;
    activeClass(index, slides);
    activeClass(index, quote);
  } else {
    index--;
    activeClass(index, slides);
    activeClass(index, quote);
  }
};

quote.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    activeClass(index, slides);
    activeClass(index, quote);
  });
});

const changeSlide = () => {
  setInterval(() => {
    nextSlide();
  }, 2000);
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

changeSlide();
