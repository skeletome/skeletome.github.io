// NAVIGATOR
const tombolNav = document.body.querySelector(".navigation button");
const rotatingNews = document.body.querySelector(".rotating-news");
const gambarLogo = document.body.querySelector(".navigation a img");
const navBar = document.body.querySelector(".navigation");
const navList = document.body.querySelector(".navigation-list");
const div = document.body.querySelectorAll("div");
const makan = document.body.querySelectorAll(".makan");

if(tombolNav){
    tombolNav.addEventListener("click", ()=>{
        if(navList.style.display=="none" || !navList.style.display){
    
            
    
            navList.style.animation="fadein .2s ease-in";
            
            setTimeout(()=>{
    
            for(let i = 0; i < makan.length ; i++){
                makan[i].style.display="none";
            }
            tombolNav.innerHTML="Close";
            navList.style.display="flex";
            navBar.style.animation= "fadein .2s ease-in";
            rotatingNews.style.animation= "fadein .2s ease-in";
            rotatingNews.style.background="black";
            navBar.style.background= "black";
            tombolNav.style.color="white";
            gambarLogo.src="img/logoputih.svg";
    
            },200);
        }else{
            
            navList.style.animation="fadeout .2s ease-out";
            // setTimeout(()=>{
            //     navBar.style.background= "white";
            //     navList.style.display="none";
            //     navBar.style.animation= "fadeout 1sc ease-out";
            //     gambarLogo.src="img/logo.svg";
            //     tombolNav.style.color="black";
            // },200);
            
            navBar.style.animation= "fadeout .2s ease-out";
            rotatingNews.style.animation= "fadeout .2s ease-out";
            
            setTimeout(()=>{
                for(let i = 0; i < makan.length ; i++){
                    makan[i].style.display="flex";
                }
    
    
                tombolNav.innerHTML="Menu";
                rotatingNews.style.background="#7827E6";
                navBar.style.background= "white";
                navList.style.display="none";
                gambarLogo.src="img/logo.svg";
                tombolNav.style.color="black";
                
            },200);
           
            
        }
    })
};


// NAVIGATOR

// SLIDER
// IMAGE

const imageSlider = document.body.querySelector('.image-slider img');

// Add a click event listener to the image element
if(imageSlider){
    imageSlider.addEventListener('click', function () {
        if(imageSlider.src.endsWith('img/jadi6.jpg')){
            imageSlider.style.animation="fadein .5s ease-in";
            imageSlider.src='img/jadi3.jpg';
            setTimeout(()=>{
                imageSlider.style.animation="none";
            },500);
            
        }else{
            imageSlider.style.animation="fadein .5s ease-out";
            imageSlider.src='img/jadi6.jpg';
            setTimeout(()=>{
                imageSlider.style.animation="none";
            },500);
        }
    });
};

if(imageSlider){
    window.addEventListener('load',()=>{
        imageSlider.style.animation="fadein 2s ease-in";
    })
    
}


// SLIDER


// MODAL-BOX

const tombolmodalX = document.body.querySelector('.modal-tombolx button');
const backgroundModal = document.body.querySelector('.modal');
const tombolIngredient = document.body.querySelector('.header-kiri button');

if(tombolIngredient){
    tombolIngredient.addEventListener('click', ()=>{
        backgroundModal.style.animation="fadein .2s ease-in";
        backgroundModal.style.display="flex";
        document.body.style.overflow = 'hidden';
        
    })
};

if(tombolmodalX){
    tombolmodalX.addEventListener('click', ()=>{
        backgroundModal.style.animation="fadeout .2s ease-out";
        setTimeout(() => {
            backgroundModal.style.display="none";
        }, 190)
        document.body.style.overflow = 'auto';
    })
};



// MODAL-BOX


// SHOP

let shopImage = document.body.querySelector(".shop-image");
let shopImages = document.body.querySelector(".shop-image img");
let shop_description = document.body.querySelectorAll(".shop-box button");
let peak = document.body.querySelector(".peak");

if(shopImages){
    window.addEventListener('load',()=>{
        shopImages.style.animation="fadein 2s ease-in";

        shop_description[0].style.opacity="0%";
        shop_description[1].style.opacity="0%";
        setTimeout(()=>{
            shop_description[0].style.animation="fadein 1s ease-in";
            shop_description[0].style.opacity="100%";

            shop_description[1].style.animation="fadein 1s ease-in";
            shop_description[1].style.opacity="100%";
        },1500);
        
    })
    shopImage.addEventListener ('mouseover', () => {
        
        shopImages.src="img/shop3.jpg";
        peak.style.animation="fadein .3s ease-in";
        peak.style.display="block";
        setTimeout(()=>{
            peak.style.animation="";
        },400);
    
    })
    shopImage.addEventListener ('mouseout', () => {
        shopImages.src="img/shop1.jpg";
        peak.style.display="none";
    })
}








// SHOP


// PRODUCT
let product_img = document.body.querySelector(".product-img img")
let product_description = document.body.querySelector(".product-description")

if (product_img){
    window.addEventListener('load', ()=>{
        product_img.style.animation="fadein 2s ease-in";
        product_description.style.opacity="0%";
        setTimeout(()=>{
            product_description.style.animation="fadein 1s ease-in";
            product_description.style.opacity="100%";
        },1500);
        
    })
}


//PRODUCT


