const responsiveMenu = document.querySelector('#responsiveMenu');
const menuBtn = document.querySelector('.menuBtn');
const nav = document.querySelector('#nav');
const close = document.querySelector('.close');
const links = document.querySelectorAll('.aside-main .link');
const vse = document.querySelector('.vse');
// SCROLL EVECT WITH NUV
console.log("%cОстановитесь!","color: red; font-family:monospace; font-size: 60px");

console.log("%cЭта функция браузера предназначена для разработчиков. Если кто-то сказал вам скопировать и вставить что-то здесь, чтобы включить функцию Mebel Shop или «взломать» чей-то аккаунт, это мошенники."," font-family:serif; font-size: 20px");
window.addEventListener('scroll', () => {
    nav.classList.toggle('active', window.scrollY > 60)
})

// OPEN RESP_MENU

menuBtn.addEventListener('click', () => {
    responsiveMenu.classList.toggle('active');
    document.body.style.overflowY = 'hidden';
})


// CLOSE RESP_MENU

function closeMenu() {
    responsiveMenu.classList.remove('active');
    document.body.style.overflowY = 'auto';
}

close.addEventListener('click', closeMenu);
vse.addEventListener('click', closeMenu);

links.forEach((val) => {
    val.addEventListener('click', closeMenu);
})



                                    // Add


const body = document.querySelector("body")
const top_images = document.querySelectorAll(".nav_images")
const someChild = document.querySelectorAll(".someChild")
const up = document.querySelector(".up")
const down = document.querySelector(".down")
const logo = document.querySelector("#logo")
const about_img = document.querySelector("#about_img")
const title = document.querySelector(".title")
const shops = document.querySelector("#shops")
const add_product = document.querySelector(".addProduct")
const cards = document.querySelectorAll(".card")
const blog = document.querySelector("#blog")
const footer = document.querySelector("footer")




// console.log(top_images)
function dark_light_mode() {

    if(body.style.backgroundColor == "rgb(65, 64, 64)") {
        body.style.backgroundColor == "white"
        up.classList.remove("dark")
        down.classList.remove("dark")
        nav.classList.remove("dark")
        title.classList.remove("dark")
        shops.classList.remove("dark")
        blog.classList.remove("dark")
        footer.classList.remove("dark")
        add_product.classList.remove("dark")

        for(let card of cards) {
            card.classList.remove("dark")
        }

        top_images[0].src = "/static/main/images/hero-product-1.jpg";
        top_images[1].src = "/static/main/images/hero-product-2.jpg";
        top_images[2].src = "/static/main/images/hero-product-3.jpg";
        top_images[3].src = "/static/main/images/hero-product-4.jpg";
        top_images[4].src = "/static/main/images/hero-product-5.jpg";
        about_img.src = "/static/main/images/about-banner.jpg"

        logo.style.color = "black"
        menuBtn.style.color = "black"
        body.style.backgroundColor = "white"
        nav.style.backgroundColor = "white"
    }else {
        up.classList.toggle("dark")
        down.classList.toggle("dark")
        nav.classList.toggle("dark")
        title.classList.toggle("dark")
        shops.classList.toggle("dark")
        blog.classList.toggle("dark")
        footer.classList.toggle("dark")
        add_product.classList.toggle("dark")
    
        for(let card of cards) {
            card.classList.toggle("dark")
        }


        
        top_images[0].src = "/static/main/images/hero-product-1-removebg-preview.png";
        top_images[1].src = "/static/main/images/hero-product-2-removebg-preview.png";
        top_images[2].src = "/static/main/images/hero-product-3-removebg-preview.png";
        top_images[3].src = "/static/main/images/hero-product-4-removebg-preview.png";
        top_images[4].src = "/static/main/images/hero-product-5-removebg-preview.png";
        about_img.src = "/static/main/images/about-banner-removebg-preview.png"

        logo.style.color = "white"
        menuBtn.style.color = "white"
        body.style.backgroundColor = "rgba(65,64,64,1)"
        nav.style.backgroundColor = "rgba(65,64,64,1)"
        
    }
    
}


// filter


const card = document.querySelectorAll(".shopCard");
const all = document.querySelector(".all");
const accessory = document.querySelector(".accessory");
const dec = document.querySelector(".decoration");
const furniture = document.querySelector(".furniture");
const search = document.querySelector(".search")
// const product_name = document.querySelectorAll(".productName")


search.addEventListener("submit", (e) => {
    e.preventDefault();
    for(let i of card) {
        if(e.target[0].value != "") {
            if(i.children[1].children[0].innerText.toLowerCase().search(e.target[0].value.toLowerCase()) != -1 ) {
                i.style.display = "flex";
            } else {
                i.style.display = "none"
            }
        }
    }
})

all.addEventListener("click", () => {
    accessory.classList.remove("active");
    dec.classList.remove("active");
    furniture.classList.remove("active");
    all.classList.add("active");
    for(let i of card) {
        i.style.display = "flex";
    }
})
accessory.addEventListener("click", () => {
    all.classList.remove("active");
    dec.classList.remove("active");
    furniture.classList.remove("active");
    accessory.classList.add("active");
    for(let i of card) {
        if(i.getAttribute("aria-label") == "accessory") {
            i.style.display = "flex"
        } else {
            i.style.display = "none"
        }
    }
})
dec.addEventListener("click", () => {
    all.classList.remove("active");
    dec.classList.add("active");
    furniture.classList.remove("active");
    accessory.classList.remove("active");
    for(let i of card) {
        if(i.getAttribute("aria-label") == "decoration") {
            i.style.display = "flex"
        } else {
            i.style.display = "none"
        }
    }
})
furniture.addEventListener("click", () => {
    all.classList.remove("active");
    dec.classList.remove("active");
    furniture.classList.add("active");
    accessory.classList.remove("active");
    for(let i of card) {
        if(i.getAttribute("aria-label") == "furniture") {
            i.style.display = "flex"
        } else {
            i.style.display = "none"
        }
    }
})