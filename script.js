
const cards = document.querySelectorAll('.card'),
      anchors = document.querySelectorAll('a[href*="#"]'),
      navigation = document.querySelector('.navigation'),
      blockWork = document.querySelector('.block-work'),
      blockStart = document.querySelector('.block-start'),
      blockAbout = document.querySelector('.block-about'),
      blockContact = document.querySelector('.block-contact'),
      start = document.querySelector('.start'),
      work = document.querySelector('.work'),
      about = document.querySelector('.about'),
      contact = document.querySelector('.contact'),
      btnInTouch = document.querySelector('#button'),
      majorBlock = document.querySelector('.major-block');
    

     // выпадающее меню при скролле вверх
window.addEventListener('scroll', function scroll (e) {
    const oldScroll = this.oldScroll || 0,
          newScroll = this.scrollY,
          isScrollDown = newScroll > oldScroll;
      
  this.oldScroll = newScroll;
  navigation.classList.toggle('scroll-down', isScrollDown);
// выделение активной панели
const list = navigation.querySelectorAll('li');
    if(this.scrollY < 870) {
     
      start.classList.add('navigation-show');
      work.classList.remove('navigation-show');
      about.classList.remove('navigation-show');
      contact.classList.remove('navigation-show');
    
    }
    
    if(this.scrollY > 870 &&  this.scrollY < 1400) {
     
      work.classList.add('navigation-show');
      start.classList.remove('navigation-show');
      about.classList.remove('navigation-show');
      contact.classList.remove('navigation-show');
      
    
    }

    if(this.scrollY > 1400 &&  this.scrollY < 1600) {
     
      work.classList.remove('navigation-show');
      start.classList.remove('navigation-show');
      contact.classList.remove('navigation-show');
      about.classList.add('navigation-show');
    
    }
    if(this.scrollY > 1600) {
     
      work.classList.remove('navigation-show');
      start.classList.remove('navigation-show');
      about.classList.remove('navigation-show');
      contact.classList.add('navigation-show');
    
    }

 });
     

   
   
  
 
for(let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener('mousemove', startRotate);
  card.addEventListener('mouseout', stopRotate);
}
  
function startRotate(event) {
  const cardItem = this.querySelector('.card-item'),
      // fignation = document.querySelector('figcaption');
      //  fignation.style.visibility = "hidden";
        halfHeight = cardItem.offsetHeight / 2;
        halfWidth = cardItem.offsetWidth / 2;
        cardItem.style.transform = 'rotateX(' + -(event.offsetY - 
          halfHeight) / 5 + 'deg) rotateY(' + (event.offsetX - 
            halfWidth) / 5 + 'deg)';
}

function stopRotate(event) {
  const cardItem = this.querySelector('.card-item');
  // fignation = document.querySelector('figcaption');
  //    fignation.style.visibility = "visible";
  cardItem.style.transform = 'rotate(0)';
}


// плавный переход по якорям
for (let anchor of anchors) {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}


function funcShow() {

 let timerId = setInterval(function changeword (){
 let wordmain = document.querySelector('#main');
 wordmain.innerText = '';
  let number = [];
  let lowRange = 33,
  heightRange = 126;
  
 for(let j = 0; j < 9; j++) {
  number[j] = Math.floor(Math.random() * heightRange + lowRange);
   if(number[j] > lowRange) {
     number[j] === 100;
  } }
 for (let k = 0; k < 9; k++){
   let developer = String.fromCharCode(68,101,118, 101,108,111,112,101,114);
   wordmain.innerText += String.fromCharCode(number[k]);
  if (String.fromCharCode(number[k]) === 'a') {
    wordmain.innerText = developer;
    clearInterval(timerId);
  break;
   
  } 

  }
  },100);
}

setInterval(funcShow, 2000);


