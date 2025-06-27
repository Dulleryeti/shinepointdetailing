window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// auto update year in footer
document.getElementById("year").textContent = new Date().getFullYear();


document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active'); 
        navToggle.classList.toggle('active'); 
    });
});

// before & after iamge
document.querySelectorAll('.beer-slider').forEach(slider => {
  new BeerSlider(slider, {
    start: slider.dataset.beerStart ? parseInt(slider.dataset.beerStart) : 50
  });
});


document.addEventListener('DOMContentLoaded', () => {
  [...document.querySelectorAll('.beer-slider')].forEach(slider => {
    const handle = slider.querySelector('.beer-handle, .beer-range');
    if (!handle) return;

    ['touchstart','touchmove'].forEach(evtName => {
      handle.addEventListener(evtName, e => {
        const touch = e.touches[0];
        if (touch) {
          // Synthesize a mouse-event substitute for BeerSlider
          const fakeEvt = new MouseEvent(evtName === 'touchstart' ? 'mousedown':'mousemove', {
            bubbles: true,
            clientX: touch.clientX,
            clientY: touch.clientY
          });
          e.preventDefault();          // stop native scrolling
          handle.dispatchEvent(fakeEvt);
        }
      }, { passive:false });
    });
  });
});


// swiper init, for google reviews

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3, 
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        }
    },
    effect: 'slide', 
});


document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".accordion-button");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        const isOpen = button.classList.contains("active");

        button.classList.toggle("active");


        buttons.forEach(b => {
          b.classList.remove('active');
          b.nextElementSibling.style.maxHeight = null;
          b.nextElementSibling.style.paddingTop = 0;
          b.nextElementSibling.style.paddingBottom = 0;
        });

        if (!isOpen) {
          button.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
          content.style.paddingBottom = '15px';
        }
      });
    });
  });


