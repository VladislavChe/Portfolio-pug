/* ---- BACKGROUND ---- */

particlesJS('particles-js', {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: ['#aa73ff', '#f8c210', '#83d238', '#33b1f8'],
    },

    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#fff',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.6,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

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
  /*Анимация offer*/
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
    <div class="wrappoffer d-flex"">
      <h1 id="stuck" style="width: 100%;"></h1><span id="cursor1" class="cursor">|</span>
    </div>   
    <div class="wrappoffer d-flex"">
      <h2 id="myname"></h2><span id="cursor2" class="cursor2">|</span>
    </div>
    `;

    let cursor1 = document.getElementById('cursor1'),
      cursor2 = document.getElementById('cursor2');

    let ticTac = 0;

    function tickCursor1(n) {
      if (n == 0) {
        setTimeout(() => {
          cursor1.classList.toggle('cursorhover');
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
          cursor2.classList.toggle('cursorhover2');
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

/* Burger-menu */
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('burger-menu');
const closeBurger = document.getElementById('close-burger');

hamburger.addEventListener('click', function () {
  menu.classList.add('oppened');
});

closeBurger.addEventListener('click', function () {
  menu.classList.remove('oppened');
});

/*index.html - END*/
