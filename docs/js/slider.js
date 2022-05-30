const sliderWrappers = document.querySelectorAll('.sliderWrapper');
const sliders = [];

sliderWrappers.forEach(slider => {
  sliders.push({
    'sliderWrapper': slider, 
    'sliderList': slider.querySelector('.sliderList'),
    'arrowWrapper': slider.querySelector('.arrowWrapper'),
    'arrowPositionBox': slider.querySelector('.arrowPositionBox'),
    'arrowLink': slider.querySelector('.arrowLink'),
    'scrolled': false,
  })
});

function checkArrowVisibility(slider) {
  if (slider.scrolled) {
    if (!slider.arrowWrapper.classList.contains("hidden")) 
      slider.arrowWrapper.classList.add('hidden');
  }
  else {
    const arrowPosition = Number((getComputedStyle(slider.arrowPositionBox).right).replace('px', ''));
    arrowPosition < -(slider.sliderList.offsetWidth - document.body.offsetWidth) 
      ? slider.arrowWrapper.classList.add('hidden')
      : slider.arrowWrapper.classList.remove('hidden');
  }
}

function handleArrowPosition(slider) {
  if (!slider.scrolled) {
    const sliderWrapperPaddingLeft = Number((getComputedStyle(slider.sliderWrapper).paddingLeft).replace('px', ''));
    const arrowPositionToSet = -slider.sliderWrapper.scrollLeft + sliderWrapperPaddingLeft;
    slider.arrowPositionBox.style.right = `${arrowPositionToSet}px`;
  }
  checkArrowVisibility(slider);
}

function slideToRight(slider) {
  slider.sliderWrapper.scrollLeft += (document.body.offsetWidth/5)*4;
}

sliders.forEach(slider => {
  checkArrowVisibility(slider);
  
  slider.arrowLink.addEventListener('click', (e) => {
    e.preventDefault();
    slideToRight(slider);
  });

  slider.sliderWrapper.addEventListener('scroll', (e) => {
    handleArrowPosition(slider);
  });

  slider.sliderWrapper.addEventListener('touchmove', (e) => {
    slider.sliderWrapper.addEventListener('scroll', (e) => {
      if (!slider.scrolled) {
        slider.scrolled = true;
      }
    });
  });
});

window.addEventListener('resize', (e) => {
  sliders.forEach(slider => {
    handleArrowPosition(slider);
  });
});
