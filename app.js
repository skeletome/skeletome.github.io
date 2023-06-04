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
const blue = document.querySelector('.blue');
const footer = document.querySelector('.footer');
const gambarKandungan = document.querySelector('.alpavit .alpavit-wrapper .wrapper-kiri img');
const h1Kandungan = document.querySelector('.alpavit .alpavit-wrapper .wrapper-tengah h1');
const pKandungan = document.querySelector('.alpavit .alpavit-wrapper .wrapper-tengah p')
const tombolKandungan = document.querySelector('.alpavit .alpavit-wrapper .wrapper-kanan button')

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
      
      tulisanMenu.style.color = 'white';
      tulisanMenu.innerHTML = 'Close';
      navmenuIsi.style.position ='static';
      tomboliconMenu.style.animation ='fadeIn .8s ease-in-out';
    };
    setTimeout(hitam, 100);

    function animasiOut () {
      tomboliconMenu.style.animation ='';
    }
    setTimeout(animasiOut, 801)
    
    
    navmenuIsi.style.transform ='translateY(0px)';
    navmenuIsi.style.transition = 'transform .5s ease'
    
    blue.style.display = 'none';
    footer.style.display = 'none';
    
   } 
   else {
    navmenuIsi.style.transform ='translateY(-1500px)';
    nav.style.background = 'white';
    
    
    
    function putih () {
      navmenuIsi.style.position ='absolute';
      tulisanMenu.style.color = 'black';

      tulisanMenu.innerHTML = 'Menu';
      gambarMenu.src = 'images/logo.svg'
      iconMenu.src = 'images/menu.svg'
      blue.style.display = 'flex';
      footer.style.display = 'flex';

      tomboliconMenu.style.animation ='fadeIn .8s ease-in-out';
    };
    setTimeout(putih, 100);

    function animasiOut () {
      tomboliconMenu.style.animation ='';
    }
    setTimeout(animasiOut, 801)
    document.body.style.backgroundColor ='purple';
    
    

    
    ;
    
   }


});

tombolKandungan.addEventListener('click', function() {
  if (gambarKandungan.src.includes ('images/alpaarbutin.svg')){
    gambarKandungan.src = 'images/vitaminc.svg';
    h1Kandungan.innerHTML = ' Vitamin C';
    pKandungan.innerHTML = ' Vitamin C is a well-established ingredient in the world of skincare. Its potent antioxidant properties protect the skin from harmful free radicals, which can cause premature aging and skin damage. In addition to its protective qualities, Vitamin C is renowned for its ability to brighten the complexion, fade dark spots, and even out skin tone. By promoting collagen production.';

    gambarKandungan.style.animation = 'fadeIn 1s ease-in';
    h1Kandungan.style.animation = 'fadeIn .5s ease-in';
    pKandungan.style.animation = 'fadeIn .5s ease-in';

    function hapusanimasi () {
    gambarKandungan.style.animation = '';
    h1Kandungan.style.animation = '';
    pKandungan.style.animation = '';
    }
    setTimeout(hapusanimasi, 600)
  }

  else {
    gambarKandungan.src = 'images/alpaarbutin.svg';
    h1Kandungan.innerHTML = ' Alpha Arbutin 3%';
    pKandungan.innerHTML = ' Alpha Arbutin works by inhibiting the production of melanin, the pigment responsible for dark spots, hyperpigmentation, and uneven skin tone. By reducing melanin synthesis, Alpha Arbutin helps fade existing dark spots and prevents the formation of new ones, giving you a more even, radiant complexion. ';

    gambarKandungan.style.animation = 'fadeIn 1s ease-in';
    h1Kandungan.style.animation = 'fadeIn .5s ease-in';
    pKandungan.style.animation = 'fadeIn .5s ease-in';

    function hapusanimasi () {
    gambarKandungan.style.animation = '';
    h1Kandungan.style.animation = '';
    pKandungan.style.animation = '';
    }
    setTimeout(hapusanimasi, 600)
  }
})





