"use strict";function _createForOfIteratorHelper(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var index=document.getElementById("particles-js");if(index){var namee=document.getElementById("name"),stuck=document.getElementById("stuck"),myName=document.getElementById("myname"),word=[],word2="";stuck.remove(),myName.remove();var contentStuck=stuck.innerHTML,stuckArr=contentStuck.split(""),contentMyname=myName.innerHTML,myNameArr=contentMyname.split(""),typeWord=function(e,t){namee.innerHTML+='\n    <div class="header__wrappoffer d-flex"">\n      <h1 id="stuck" style="width: 100%;"></h1><span id="cursor1" class="header__cursor">|</span>\n    </div>   \n    <div class="header__wrappoffer d-flex"">\n      <h2 id="myname"></h2><span id="cursor2" class="header__cursor2">|</span>\n    </div>\n    ';var n=document.getElementById("cursor1"),r=document.getElementById("cursor2"),a=0;new Promise((function(t,r){!function e(t){0==t&&setTimeout((function(){n.classList.toggle("header__cursorhover"),0==a&&e(0)}),200)}(a),setTimeout((function(){!function r(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;setTimeout((function(){var o=document.getElementById("stuck"),l=a;l<=e.length-1&&(o.innerHTML+="".concat(e[l]),r(l=a+1)),l>e.length-1&&(n.style.visibility="hidden",n.classList.remove("cursorhover"),t())}),200)}()}),0)})).then((function(){!function e(t){0==t&&setTimeout((function(){r.classList.toggle("header__cursorhover2"),0==a&&e(0)}),200)}(a),function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;setTimeout((function(){var o=document.getElementById("myname"),l=n;l<=t.length-1&&(o.innerHTML+="".concat(t[l]),e(l=n+1)),l>t.length-1&&(r.classList.remove("cursorhover2"),r.style.visibility="hidden",a=1)}),200)}(0)}))};typeWord(stuckArr,myNameArr)}else;var hamburger=document.getElementById("hamburger");if(hamburger){var menu=document.getElementById("burger-menu"),closeBurger=document.getElementById("close-burger");hamburger.addEventListener("click",(function(){menu.classList.add("oppened")})),closeBurger.addEventListener("click",(function(){menu.classList.remove("oppened")}))}else;var pageAbout=document.getElementById("header-about");if(pageAbout){var _step,anchors=document.querySelectorAll('a[href*="#"]'),_iterator=_createForOfIteratorHelper(anchors);try{var _loop=function(){var e=_step.value;e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href");document.querySelector(""+n).scrollIntoView({behavior:"smooth",block:"start"})}))};for(_iterator.s();!(_step=_iterator.n()).done;)_loop()}catch(e){_iterator.e(e)}finally{_iterator.f()}}else;var pageAccordeon=document.querySelectorAll(".accordeon__title");pageAccordeon&&function(){for(var e=document.querySelectorAll(".accordeon__wrapp"),t=document.querySelectorAll(".accordeon__element"),n=0;n<t.length;n++)t[n].addEventListener("click",(function(t){for(var n=t.target.dataset.btn,r=0;r<e.length;r++)e[r].style.maxHeight?e[r].style.maxHeight=null:e[r].dataset.content===n&&(e[r].style.maxHeight=e[r].scrollHeight+"px")}))}();var cube=document.getElementById("generator__cube");if(cube){var changeRadius=function(){var e={tl:document.getElementById("generator__tlr").value,tr:document.getElementById("generator__trr").value,br:document.getElementById("generator__brr").value,bl:document.getElementById("generator__blr").value};document.getElementById("generator__result-tlr").innerHTML=e.tl,document.getElementById("generator__result-trr").innerHTML=e.tr,document.getElementById("generator__result-brr").innerHTML=e.br,document.getElementById("generator__result-blr").innerHTML=e.bl;var t="".concat(e.tl,"px ").concat(e.tr,"px ").concat(e.br,"px ").concat(e.bl,"px");cube.style.borderRadius=t},changeTextCode=function(){var e=getComputedStyle(cube);textCode.innerHTML="border-radius: "+e.borderRadius+";"},btnShowCode=document.getElementById("generator__btn-viewcode"),textCode=document.getElementById("generator__samecode"),inputs=document.querySelectorAll(".generator__input");btnShowCode.addEventListener("click",(function(){textCode.classList.toggle("generator__active"),textCode.classList.contains("generator__active")?btnShowCode.innerHTML="Скрыть код":btnShowCode.innerHTML="Показать код"}));var _step2,_iterator2=_createForOfIteratorHelper(inputs);try{for(_iterator2.s();!(_step2=_iterator2.n()).done;)node=_step2.value,node.addEventListener("input",changeRadius),node.addEventListener("input",changeTextCode)}catch(e){_iterator2.e(e)}finally{_iterator2.f()}}else;var pageCalculator=document.querySelector(".calculator__title");if(pageCalculator){var activePlan=function(e){for(var t=0;t<btn.length;t++)btn[t].classList.remove("calculator__active");e.classList.add("calculator__active")},summ=function(e){10==numbers.value&&totalSumm(staticOptionNumb*e);var t=+numbers.value;totalSumm(e*t),numbers.addEventListener("change",(function(){var t=+numbers.value;totalSumm(e*t)}))},totalSumm=function(e){totality.innerHTML=e},btn=document.querySelectorAll(".calculator__wrapp-input"),plans=document.querySelectorAll(".calculator__selected-plan"),_inputs=document.querySelectorAll(".calculator__price-input"),numbers=document.getElementById("calculator__numb");btn.forEach((function(e){e.addEventListener("click",(function(t){activePlan(e);for(var n=this.dataset.input,r=0;r<plans.length;r++)plans[r].classList.remove("calculator__active"),plans[r].dataset.plan===n&&plans[r].classList.add("calculator__active")}))})),_inputs.forEach((function(e){e.addEventListener("change",(function(t){var n=+e.value;summ(n)}))}));var op=document.getElementById("calculator__op"),totality=document.querySelector(".calculator__total-price"),staticOptionNumb=10}else;var pageSlider=document.querySelector(".slider__title");if(pageSlider){var activeSlide=function(e){slides.forEach((function(e){e.classList.remove("slider__active")})),slides[e].classList.add("slider__active")},nextSlide=function(){indexSlide==slides.length-1?(activeSlide(indexSlide=0),changeDot(indexSlide)):(indexSlide++,activeSlide(indexSlide),changeDot(indexSlide))},prevSlide=function(){0==indexSlide?(indexSlide=slides.length-1,activeSlide(indexSlide),changeDot(indexSlide)):(indexSlide--,activeSlide(indexSlide),changeDot(indexSlide))},changeDot=function(e){var t,n=_createForOfIteratorHelper(dots);try{for(n.s();!(t=n.n()).done;)dot=t.value,dot.classList.remove("slider__active"),dots[e].classList.add("slider__active")}catch(e){n.e(e)}finally{n.f()}},activeDot=function(e){for(var t=0;t<dots.length;t++)dots[t].classList.remove("slider__active");e.classList.add("slider__active")},slides=document.querySelectorAll(".slider__slide"),btnPrev=document.getElementById("slider__btn-prev"),btnNext=document.getElementById("slider__btn-next"),dots=document.querySelectorAll(".dot"),indexSlide=0;btnNext.addEventListener("click",nextSlide),btnPrev.addEventListener("click",prevSlide),dots.forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.dataset.dot;activeDot(e.target);for(var n=0;n<slides.length;n++)slides[n].classList.remove("slider__active"),slides[n].dataset.slide===t&&slides[n].classList.add("slider__active")}))}))}else;var pageTabs=document.querySelector(".tabs__title");pageTabs&&function(){for(var e=function(e){for(var n=0;n<t.length;n++)t[n].classList.remove("tabs__active");e.classList.add("tabs__active")},t=document.querySelectorAll(".tabs__btn"),n=document.querySelectorAll(".tabs__content"),r=0;r<t.length;r++)t[r].addEventListener("click",(function(t){var r=t.target.dataset.btn;e(t.target);for(var a=0;a<n.length;a++)n[a].classList.remove("tabs__active"),n[a].dataset.content===r&&n[a].classList.add("tabs__active")}))}();var pageMap=document.querySelector(".map__title");if(pageMap){var scalle=document.querySelector(".map__inner-scalle"),bgScalle=document.querySelector(".map__bg-scalle"),plus=document.querySelector(".map__scalle-plus"),minuse=document.querySelector(".map__scalle-minuse");map=document.querySelector(".map__mini-map"),bgScalle.style.width="50px",map.style.width="50px",map.style.height="50px";var counter=50;scalle.addEventListener("mousemove",(function(e){e.offsetX>=50&&(counter=e.offsetX,bgScalle.style.width=e.offsetX+"px",map.style.width=e.offsetX+0+"px",map.style.height=e.offsetX+0+"px")})),plus.addEventListener("click",(function(){counter>=50&&(counter+=10,bgScalle.style.width=counter+"px",map.style.width=counter+"px",map.style.height=counter+"px")})),minuse.addEventListener("click",(function(){counter>=51&&(counter-=10,bgScalle.style.width=counter+"px",map.style.width=counter+"px",map.style.height=counter+"px")}))}else;