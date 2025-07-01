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


document.querySelectorAll('.ba-container').forEach((container) => {
  const afterImg = container.querySelector('.ba-img.after');
  const handle = container.querySelector('.ba-handle'); // Scoped to the container
  const thumb = handle.querySelector('.ba-thumb');
  const beforeLabel = container.querySelector('.before-label');
  const afterLabel = container.querySelector('.after-label');

  const updateSlider = (x) => {
    const rect = container.getBoundingClientRect();
    let offsetX = x - rect.left;
    offsetX = Math.max(0, Math.min(offsetX, rect.width));
    const percent = (offsetX / rect.width) * 100;
    handle.style.left = `${percent}%`;
    afterImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;


    if (percent <= 5) {
      beforeLabel.style.opacity = '0'; // Hide "Before" label
    } else {
      beforeLabel.style.opacity = '1'; // Show "Before" label
    }

    if (percent >= 95) {
      afterLabel.style.opacity = '0'; // Hide "After" label
    } else {
      afterLabel.style.opacity = '1'; // Show "After" label
    }
  };

  let dragging = false;

  const onMove = (e) => {
    if (dragging) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      updateSlider(clientX);
    }
  };

  const stopDragging = () => {
    dragging = false;
    thumb.classList.remove('dragging');
    container.removeEventListener('pointermove', onMove); 
  };

  container.addEventListener('pointerdown', (e) => {
    if (e.buttons === 1 || e.type === 'touchstart') { // Ensure left mouse button or touch
      dragging = true;
      thumb.classList.add('dragging');
      updateSlider(e.clientX || e.touches[0].clientX);
      container.addEventListener('pointermove', onMove); // Add pointermove listener
      e.preventDefault();
    }
  });

  container.addEventListener('pointerup', (e) => {
    stopDragging();
    e.preventDefault(); 
  });

  container.addEventListener('pointerleave', (e) => {
    e.preventDefault(); 
  });

  window.addEventListener('pointermove', (e) => {
    if (e.buttons !== 1) { 
      stopDragging();
    }
    onMove(e);
  });

  container.querySelectorAll('.ba-img').forEach(img => {
    img.addEventListener('dragstart', (e) => {
      e.preventDefault(); 
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


