const navmenuIsi = document.querySelector('.nav-menu');
const navMenu = document.querySelector('nav .navigation .navigation-menu');
const tulisanMenu = document.querySelector('nav .navigation .navigation-menu button p');
const tomboliconMenu = document.querySelector('nav .navigation .navigation-menu button');
const iconMenu = document.querySelector('nav .navigation .navigation-menu button img');
const gambarMenu = document.querySelector('nav .navigation .navigation-logo img');
const findUs = document.querySelector('.find-us li a');
const listfindUs = document.querySelector('.find-us .list-findus');
const downList = document.querySelector('.isi-kanan .find-us > li > a >img');
const nav = document.querySelector('nav');
const div = document.querySelectorAll('div');

findUs.addEventListener('click', function() {
  if(listfindUs.style.display == 'none' || !listfindUs.style.display){
    listfindUs.style.display = 'flex';
    downList.style.transform = 'scaleY(-1)';
    downList.style.transition = 'transform .5s ease'
    listfindUs.style.animation ='fadeIn 1s';

  }
  else{
    listfindUs.style.display = 'none';
  
    downList.style.transform = 'scaleY(1)';
    downList.style.transition = 'transform .5s ease'
  }
});

navMenu.addEventListener ('click', function() {
   if (nav.style.background === 'none' || !nav.style.background || nav.style.background === 'white' ) {
    document.body.style.backgroundColor ='black';
    nav.style.background = 'black';
    gambarMenu.src = 'images/none';
    function hitam () {
      
      gambarMenu.src = 'images/logoputih.svg';
      iconMenu.src = 'images/menuputih.svg';
      tomboliconMenu.style.animation ='fadeIn .8s ease-in-out';
      tulisanMenu.style.color = 'white';
      tulisanMenu.innerHTML = 'Close';
      navmenuIsi.style.position ='static';
      
    };
    setTimeout(hitam, 100);

    
    
    navmenuIsi.style.transform ='translateY(0px)';
    navmenuIsi.style.transition = 'transform .5s ease'
    for(i=10; i< div.length;i++){
      div[i].style.display = 'none';
    };
    
   } 
   else {
    navmenuIsi.style.transform ='translateY(-1500px)';
    
    
    
    
    function putih () {
      navmenuIsi.style.position ='absolute';
      nav.style.background = 'white';
      tulisanMenu.style.color = 'black';
      nav.style.background = 'white';
      tulisanMenu.innerHTML = 'Menu';
      gambarMenu.src = 'images/logo.svg'
      iconMenu.src = 'images/menu.svg'
      
      tomboliconMenu.style.animation ='none';
      
      for(i=10; i< div.length;i++){
        div[i].style.display = 'flex';
      };
    };
    setTimeout(putih, 100);
    document.body.style.backgroundColor ='purple';
    
    

    
    ;
    
   }


});



