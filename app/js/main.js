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
const menu = document.getElementById('burger-menu');
const closeBurger = document.getElementById('close-burger');

hamburger.addEventListener('click', function () {
  menu.classList.add('oppened');
});

closeBurger.addEventListener('click', function () {
  menu.classList.remove('oppened');
});
/*burgerMenu-End*/

/*index.html - END*/
