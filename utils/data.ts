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
