import heroCardImg1 from "../assets/8-trolley.svg";
import heroCardImg2 from "../assets/11-gift-card.svg";
import heroCardImg3 from "../assets/10-credit-card.svg";
import heroCardImg4 from "../assets/9-money.svg";

export const menu = [
  {
    title: "Home ",
    path: "/home",
    submenu: [
      { title: "Home Page 01", path: "Home Page 02" },
      { title: "Home Page 01", path: "Home Page 02" },
    ],
  },
  {
    title: "About ",
    path: "/about",
    submenu: [{ title: "Home Page 01", path: "Home Page 02" }],
  },
  {
    title: "Contact ",
    path: "/contact",
    submenu: [{ title: "Home Page 01", path: "Home Page 02" }],
  },
  {
    title: "Service",
    path: "/service",
  },
];

export const heroCard = [
  {
    title: "Free shipping ",
    desc: "On all orders over $49.00",
    img: heroCardImg1,
  },
  {
    title: "Free shipping ",
    desc: "On all orders over $49.00",
    img: heroCardImg2,
  },
  {
    title: "Free shipping ",
    desc: "On all orders over $49.00",
    img: heroCardImg3,
  },
  {
    title: "Free shipping ",
    desc: "On all orders over $49.00",
    img: heroCardImg4,
  },
];

export const categories = [
  {
    title: "Medicine",
    path: "/",
    submenu: [
      {
        title: "Pain Killer",
        path: "/pain-killer",
      },
      {
        title: "Gastic",
        path: "/gastic",
      },
      {
        title: "Diabetic",
        path: "/diabetic",
      },
    ],
  },
  {
    title: "Equipment",
    path: "/",
    submenu: [
      {
        title: "sergical product",
        path: "/sergical-product",
      },
      {
        title: "Frist Aid",
        path: "/frist-aid",
      },
      {
        title: "Device ",
        path: "/device",
      },
    ],
  },
  {
    title: "Safety suits",
    path: "/",
    submenu: [
      {
        title: "Mask",
        path: "/",
      },
      {
        title: "PPI",
        path: "/",
      },
    ],
  },
  {
    title: "Hygicinic",
    path: "/",
    submenu: [
      {
        title: "Sanitizer",
        path: "/",
      },
    ],
  },
];

export const carouselItems = [
  {
    src: "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/slider/61.jpg",
    alt: "Medicine Image 1",
    title: "Your Health, Our Priority",
    subtitle: "Explore our wide range of medicines",
  },
  {
    src: "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
    alt: "Medicine Image 2",
    title: "Trusted by Professionals",
    subtitle: "Quality medicines at your doorstep",
  },
  {
    src: "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/slider/61.jpg",
    alt: "Medicine Image 3",
    title: "Affordable Healthcare",
    subtitle: "We care about your well-being",
  },
];

export const Category = [
  {
    title: "Medicine",
    path: "medicine",
  },
  {
    title: "Safety Suite",
    path: "safty",
  },
  {
    title: "Equipment",
    path: "equipment",
  },
  {
    title: "Hygicinic",
    path: "hygicinic",
  },
];
