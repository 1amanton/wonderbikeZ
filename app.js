const wrapper = document.querySelector(".slider-wrapper");

const menuItems = document.querySelectorAll(".menu-item");


const products = [
    {
        id: 1,
        title: "BMW",
        price: 12999,
        colors: [
            {
                code: "yellow",
                img: "./img/bmw1.png"
            },
            {
                code: "green",
                img: "./img/bmw2.png"
            },
        ],
    },
    
    {
        id: 2,
        title: "SUZUKI",
        price: 10999,
        colors: [
            {
                code: "blue",
                img: "./img/suzuki1.png"
            },
            {
                code: "aqua",
                img: "./img/suzuki2.png"
            },
        ],
    },

    {
        id: 3,
        title: "DUCATTI",
        price: 10499,
        colors: [
            {
                code: "red",
                img: "./img/ducatti1.png"
            },
            {
                code: "green",
                img: "./img/ducatti2.png"
            },
        ],
    },

    {
        id: 4,
        title: "DAYTONA",
        price: 8999,
        colors: [
            {
                code: "red",
                img: "./img/daytona1.png"
            },
            {
                code: "yellow",
                img: "./img/daytona2.png"
            },
        ],
    },

    {
        id: 5,
        title: "KAWASAKI",
        price: 10299,
        colors: [
            {
                code: "green",
                img: "./img/kawasaki1.png"
            },
            {
                code: "red",
                img: "./img/kawasaki2.png"
            },
        ],
    },

];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".product-img");
const currentProductTitle = document.querySelector(".product-title");
const currentProductPrice = document.querySelector(".product-price");
const currentProductColors = document.querySelectorAll(".product-color");
const currentProductSizes = document.querySelectorAll(".product-size");


const productButton = document.querySelector(".product-buy");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close-btn");

/**
 * change X direction by index*100vw
 * 
 * change index of choosenProduct
 * 
 * change texts of CurrentProduct
 * 
 * change CurrentProductColors
 */
 menuItems.forEach((item,index) => {
    item.addEventListener("click", () => {

        wrapper.style.transform = `translateX(${index * -100}vw)`;

        choosenProduct = products[index];

        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = `$${choosenProduct.price}`;
        currentProductImg.src = choosenProduct.colors[0].img;

        currentProductColors.forEach((color,index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });

    });
});


/**
 * change image by color
 */
currentProductColors.forEach((color,index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;

    });
});


/**
 * change color of choosenSize
 * first step reset all sizes icon to bg:white and color:black
 * second step make reversed colors for clicked size icon
 */
currentProductSizes.forEach((size,index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

productButton.addEventListener("click", () => {
    payment.style.display = "flex";

});

close.addEventListener("click", () => {
    payment.style.display = "none";

});