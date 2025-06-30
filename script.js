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


// window.addEventListener('DOMContentLoaded', function () {
//   document.querySelectorAll('.cocoen').forEach(function (el) {
//     new Cocoen(el); // ✅ this is the correct usage
//   });
// });

  const container = document.getElementById('baSlider');
  const afterImg = container.querySelector('.ba-img.after');
  const handle = document.getElementById('baHandle');

  const updateSlider = (x) => {
    const rect = container.getBoundingClientRect();
    let offsetX = x - rect.left;
    offsetX = Math.max(0, Math.min(offsetX, rect.width));
    const percent = (offsetX / rect.width) * 100;
    handle.style.left = `${percent}%`;
    afterImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
  };

  const onMove = (e) => {
    if (e.touches) updateSlider(e.touches[0].clientX);
    else updateSlider(e.clientX);
  };

  let dragging = false;

  container.addEventListener('pointerdown', (e) => {
    dragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener('pointermove', (e) => {
    if (dragging) onMove(e);
  });

  window.addEventListener('pointerup', () => dragging = false);






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


