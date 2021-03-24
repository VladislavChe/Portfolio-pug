/*index.html*/

const index = document.getElementById('particles-js');

if (!index) {
  // console.log('no');
} else {
  /*Анимация логотипа*/
  // const logoImg = document.getElementById('logo-wrapp');
  // const logo = document.getElementById('logo');
  // logo.addEventListener('mouseover', () => {
  //   logoImg.classList.add('animate__flip');
  // });
  // logo.addEventListener('mouseleave', () => {
  //   setTimeout(() => {
  //     logoImg.classList.remove('animate__flip');
  //   }, 800);
  // });

  /*animateTypeName-Start*/
  const namee = document.getElementById('name'),
    stuck = document.getElementById('stuck'),
    myName = document.getElementById('myname');

  let word = [];
  let word2 = '';

  stuck.remove();
  myName.remove();

  const contentStuck = stuck.innerHTML;
  let stuckArr = contentStuck.split('');

  const contentMyname = myName.innerHTML;
  let myNameArr = contentMyname.split('');

  const typeWord = (arr1, arr2) => {
    namee.innerHTML += `
    <div class="header__wrappoffer d-flex"">
      <h1 id="stuck" style="width: 100%;"></h1><span id="cursor1" class="header__cursor">|</span>
    </div>   
    <div class="header__wrappoffer d-flex"">
      <h2 id="myname"></h2><span id="cursor2" class="header__cursor2">|</span>
    </div>
    `;

    let cursor1 = document.getElementById('cursor1'),
      cursor2 = document.getElementById('cursor2');

    let ticTac = 0;

    function tickCursor1(n) {
      if (n == 0) {
        setTimeout(() => {
          cursor1.classList.toggle('header__cursorhover');
          if (ticTac == 0) {
            tickCursor1(0);
          }
        }, 200);
      } else {
      }
    }

    function tickCursor2(n) {
      if (n == 0) {
        setTimeout(() => {
          cursor2.classList.toggle('header__cursorhover2');
          if (ticTac == 0) {
            tickCursor2(0);
          }
        }, 200);
      } else {
      }
    }

    const promiseEl = new Promise((resolve, reject) => {
      tickCursor1(ticTac);
      setTimeout(() => {
        function typeStuck(ind = 0) {
          setTimeout(() => {
            let stuck = document.getElementById('stuck');
            let result = ind;
            if (result <= arr1.length - 1) {
              stuck.innerHTML += `${arr1[result]}`;
              result = ind + 1;
              typeStuck(result);
            }
            if (result > arr1.length - 1) {
              cursor1.style.visibility = 'hidden';
              cursor1.classList.remove('cursorhover');
              resolve();
            }
          }, 200);
        }
        typeStuck();
      }, 0);
    });

    promiseEl.then(() => {
      tickCursor2(ticTac);
      function typeName(ind = 0) {
        setTimeout(() => {
          let myName = document.getElementById('myname');
          let result = ind;
          if (result <= arr2.length - 1) {
            myName.innerHTML += `${arr2[result]}`;
            result = ind + 1;
            typeName(result);
          }

          if (result > arr2.length - 1) {
            cursor2.classList.remove('cursorhover2');
            cursor2.style.visibility = 'hidden';
            ticTac = 1;
          }
        }, 200);
      }
      typeName(0);
    });
  };

  typeWord(stuckArr, myNameArr);
}
/*animateTypeName-End*/

/*burgerMenu-Start*/
const hamburger = document.getElementById('hamburger');
if (!hamburger) {
  // console.log('no');
} else {
  const menu = document.getElementById('burger-menu');
  const closeBurger = document.getElementById('close-burger');

  hamburger.addEventListener('click', function () {
    menu.classList.add('oppened');
  });

  closeBurger.addEventListener('click', function () {
    menu.classList.remove('oppened');
  });
}
/*burgerMenu-End*/
/*index.html - END*/

/*about.html - START*/
const pageAbout = document.getElementById('header-about');
if (!pageAbout) {
} else {
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockId = anchor.getAttribute('href');
      document.querySelector('' + blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
}
/*about.html - END*/

/*page-accordeon.html - START*/
const pageAccordeon = document.querySelectorAll('.accordeon__title');
if (!pageAccordeon) {
  // console.log('no');
} else {
  var accordeon = document.querySelectorAll('.accordeon__wrapp'),
    accordeonBtn = document.querySelectorAll('.accordeon__element');

  for (var i = 0; i < accordeonBtn.length; i++) {
    accordeonBtn[i].addEventListener('click', function (event) {
      var currBtn = event.target.dataset.btn;

      for (var j = 0; j < accordeon.length; j++) {
        if (accordeon[j].style.maxHeight) {
          accordeon[j].style.maxHeight = null;
        } else {
          if (accordeon[j].dataset.content === currBtn) {
            accordeon[j].style.maxHeight = accordeon[j].scrollHeight + 'px';
          }
        }
      }
    });
  }
}

/*page-accordeon.html - END*/
/*page-generator.html - START*/
let cube = document.getElementById('generator__cube');
if (!cube) {
  // console.log('no');
} else {
  var rangeTl = document.getElementById('generator__tlr'),
    rangeTr = document.getElementById('generator__trr'),
    rangeBl = document.getElementById('generator__blr'),
    rangeBr = document.getElementById('generator__brr');

  var resultTl = document.getElementById('generator__result-tlr'),
    resultTr = document.getElementById('generator__result-trr'),
    resultBl = document.getElementById('generator__result-blr'),
    resultBr = document.getElementById('generator__result-brr');

  var inputs = document.querySelectorAll('.generator__input');

  function changeRadius() {
    resultTl.innerHTML = rangeTl.value;
    resultTr.innerHTML = rangeTr.value;
    resultBl.innerHTML = rangeBl.value;
    resultBr.innerHTML = rangeBr.value;

    cube.style.borderRadius =
      rangeTl.value +
      'px ' +
      rangeTr.value +
      'px ' +
      rangeBr.value +
      'px ' +
      rangeBl.value +
      'px ';
  }

  for (node of inputs) {
    node.addEventListener('input', changeRadius);
    node.addEventListener('input', getCode);
  }

  var btnViewcode = document.getElementById('generator__btn-viewcode'),
    resultCode = document.getElementById('generator__samecode');

  function getCode() {
    var style = getComputedStyle(cube);
    resultCode.innerHTML = 'border-radius: ' + style.borderRadius + ';';
    btnViewcode.addEventListener('click', function () {
      resultCode.classList.toggle('generator__active');
      if (resultCode.classList.contains('generator__active')) {
        btnViewcode.innerHTML = 'Скрыть код';
      } else {
        btnViewcode.innerHTML = 'Показать код';
      }
    });
  }
}
/*page-generator.html - END*/

/*page-calculator.html - START*/
const pageCalculator = document.querySelector('.calculator__title');
if (!pageCalculator) {
  // console.log('no');
} else {
  var btn = document.querySelectorAll('.calculator__wrapp-input'),
    plans = document.querySelectorAll('.calculator__selected-plan'),
    inputs = document.querySelectorAll('.calculator__price-input'),
    numbers = document.getElementById('calculator__numb');

  function activePlan(el) {
    for (var i = 0; i < btn.length; i++) {
      btn[i].classList.remove('calculator__active');
    }
    el.classList.add('calculator__active');
  }

  btn.forEach((element) => {
    element.addEventListener('click', function (event) {
      activePlan(element);

      var currInput = this.dataset.input;

      for (var j = 0; j < plans.length; j++) {
        plans[j].classList.remove('calculator__active');
        if (plans[j].dataset.plan === currInput) {
          plans[j].classList.add('calculator__active');
        }
      }
    });
  });

  inputs.forEach((input) => {
    input.addEventListener('change', (e) => {
      var inputNumb = +input.value;

      summ(inputNumb);
    });
  });

  var op = document.getElementById('calculator__op');

  function summ(a) {
    if (numbers.value == 10) {
      totalSumm(staticOptionNumb * a);
    }

    var optionNumb = +numbers.value;

    var total = a * optionNumb;

    totalSumm(total);

    numbers.addEventListener('change', () => {
      var optionNumb = +numbers.value;

      var total = a * optionNumb;

      totalSumm(total);
    });
  }

  var totality = document.querySelector('.calculator__total-price');
  var staticOptionNumb = 10;

  function totalSumm(sum) {
    totality.innerHTML = sum;
  }
}
/*page-calculator.html - END*/

/*page-slider.html - START*/
const pageSlider = document.querySelector('.slider__title');
if (!pageSlider) {
  // console.log('no');
} else {
  var slides = document.querySelectorAll('.slider__slide'),
    btnPrev = document.getElementById('slider__btn-prev'),
    btnNext = document.getElementById('slider__btn-next'),
    dots = document.querySelectorAll('.dot');

  var indexSlide = 0;

  function activeSlide(n) {
    for (slide of slides) {
      slide.classList.remove('slider__active');
    }

    slides[n].classList.add('slider__active');
  }

  function nextSlide() {
    if (indexSlide == slides.length - 1) {
      indexSlide = 0;
      activeSlide(indexSlide);
      changeDot(indexSlide);
    } else {
      indexSlide++;
      activeSlide(indexSlide);
      changeDot(indexSlide);
    }
  }

  function prevSlide() {
    if (indexSlide == 0) {
      indexSlide = slides.length - 1;
      activeSlide(indexSlide);
      changeDot(indexSlide);
    } else {
      indexSlide--;
      activeSlide(indexSlide);
      changeDot(indexSlide);
    }
  }

  btnNext.addEventListener('click', nextSlide);
  btnPrev.addEventListener('click', prevSlide);

  function changeDot(d) {
    for (dot of dots) {
      dot.classList.remove('slider__active');
      dots[d].classList.add('slider__active');
    }
  }

  function activeDot(act) {
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.remove('slider__active');
    }
    act.classList.add('slider__active');
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', function (event) {
      var currDot = event.target.dataset.dot;
      activeDot(event.target);

      for (var j = 0; j < slides.length; j++) {
        slides[j].classList.remove('slider__active');
        if (slides[j].dataset.slide === currDot) {
          slides[j].classList.add('slider__active');
        }
      }
    });
  });
}
/*page-slider.html - END*/
/*page-tabs.html - START*/
const pageTabs = document.querySelector('.tabs__title');
if (!pageTabs) {
  // console.log('no');
} else {
  var tabs = document.querySelectorAll('.tabs__btn'),
    content = document.querySelectorAll('.tabs__content');

  function changeClass(el) {
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('tabs__active');
    }
    el.classList.add('tabs__active');
  }

  for (var j = 0; j < tabs.length; j++) {
    tabs[j].addEventListener('click', function (event) {
      var currTab = event.target.dataset.btn;
      changeClass(event.target);
      for (var i = 0; i < content.length; i++) {
        content[i].classList.remove('tabs__active');
        if (content[i].dataset.content === currTab) {
          content[i].classList.add('tabs__active');
        }
      }
    });
  }
}
/*page-tabs.html - END*/
/*page-map.html - START*/
const pageMap = document.querySelector('.map__title');
if (!pageMap) {
  // console.log('no');
} else {
  let scalle = document.querySelector('.map__inner-scalle'),
    bgScalle = document.querySelector('.map__bg-scalle'),
    plus = document.querySelector('.map__scalle-plus'),
    minuse = document.querySelector('.map__scalle-minuse');
  map = document.querySelector('.map__mini-map');

  bgScalle.style.width = 50 + 'px';
  map.style.width = 50 + 'px';
  map.style.height = 50 + 'px';
  let counter = 50;
  scalle.addEventListener('mousemove', function (event) {
    if (event.offsetX >= 50) {
      counter = event.offsetX;

      bgScalle.style.width = event.offsetX + 'px';

      map.style.width = event.offsetX + 0 + 'px';
      map.style.height = event.offsetX + 0 + 'px';
    }
  });

  plus.addEventListener('click', function () {
    if (counter >= 50) {
      counter += 10;

      bgScalle.style.width = counter + 'px';
      map.style.width = counter + 'px';
      map.style.height = counter + 'px';
    }
  });
  minuse.addEventListener('click', function () {
    if (counter >= 51) {
      counter -= 10;

      bgScalle.style.width = counter + 'px';
      map.style.width = counter + 'px';
      map.style.height = counter + 'px';
    }
  });
}
/*page-map.html - END*/
