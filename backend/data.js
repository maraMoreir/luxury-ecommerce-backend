import bcrypt from "bcryptjs";

const data = {
    users: [
        {
            name: "Silmara",
            email: "admin@gmail.com",
            password: bcrypt.hashSync(''),
            isAdmin: true
        },
        {
            name: "Maria",
            email: "maaria@gmail.com",
            password: bcrypt.hashSync(''),
            isAdmin: false
        },
    ],
    sliderItems: [
        {
            //_id: 1,
            image: "/images/slider/1.jpg"
        },
        {
            //_id: 2,
            image: "/images/slider/2.jpg"
        },
        {
            //_id: 3,
            image: "/images/slider/3.jpg"
        }
    ],
    category: [
        {
            //_id: 1,
            title: "Masculino",
            image: "/images/category/meen.jpg"
        },
        {
           //_id: 2,
            title: "Feminino",
            image: "/images/category/women.1.jpg"
        },
        {
           //_id: 3,
            title: "Infantil",
            image: "/images/category/kids.jpg"
        },
    ],
    products: [
        {
            //_id: 1,
            title: "Jaqueta",
            slug: "product1",
            desc: "Jaqueta masculina de outono e de inverno,jaqueta casual masculina",
            category: "Masculino",
            image: "/images/products/m1.jpg",
            image1: "/images/products/m2.jpg",
            image2: "/images/products/m3.jpg",
            image3: "/images/products/m4.jpg",
            countInStock: 2,
            price: "89.00",
        },
        {
            //_id: 2,
            title: "Sobretudo",
            slug: "product2",
            desc: "O casaco longo adota cor sólida e design trespassado, é muito elegante e simples. O design longo faz você parecer mais temperamento e tem boa retenção de calor.",
            category: "Feminino",
            image: "/images/products/f1.jpg",
            image1: "/images/products/f2.jpg",
            image2: "/images/products/f3.jpg",
            image3: "/images/products/f4.jpg",
            countInStock: 5,
            price: "100.00",
        },
        {
            //_id: 3,
            title: "Conjunto Kids",
            slug: "product3",
            desc: " Conjunto inclui: uma parte superior + 1 calça, + 1 jaqueta",
            category: "Infantil",
            image: "/images/products/k1.jpg",
            image1: "/images/products/k2.jpg",
            image2: "/images/products/k3.jpg",
            image3: "/images/products/k4.jpg",
            countInStock: 0,
            price: "109.99",
        },
        {
            //_id: 4,
            title: "Bebê Vestidos",
            slug: "product4",
            desc: "Conjunto inclui: uma parte superior + 1 blusa + 1 sapato",
            category: "Infantil",
            image: "/images/products/ki1.jpg",
            image1: "/images/products/ki2.jpg",
            image2: "/images/products/ki3.jpg",
            image3: "/images/products/ki4.jpg",
            countInStock: 7,
            price: "90.00",
        },
    ],
};

export default data;


