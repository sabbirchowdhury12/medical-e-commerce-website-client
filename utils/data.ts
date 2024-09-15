import heroCardImg1 from "../assets/8-trolley.svg";
import heroCardImg2 from "../assets/11-gift-card.svg";
import heroCardImg3 from "../assets/10-credit-card.svg";
import heroCardImg4 from "../assets/9-money.svg";
import { OrderListItem } from "@/type/common";
import { title } from "process";

export const menu = [
  {
    title: "Home ",
    path: "/home",
    submenu: [{ title: "Home Page 01", path: "/" }],
  },
  {
    title: "About ",
    path: "/about",
    submenu: [{ title: "About Page 01", path: "about" }],
  },
  {
    title: "Contact ",
    path: "/contact",
    submenu: [{ title: "Contact Page 01", path: "/contact" }],
  },
  {
    title: "Service",
    path: "/service",
    submenu: [{ title: "Service Page 01", path: "/service" }],
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
        path: "/shop/product",
      },
      {
        title: "Gastic",
        path: "/shop/product",
      },
      {
        title: "Diabetic",
        path: "/shop/product",
      },
    ],
  },
  {
    title: "Equipment",
    path: "/",
    submenu: [
      {
        title: "sergical product",
        path: "/shop/product",
      },
      {
        title: "Frist Aid",
        path: "/shop/product",
      },
      {
        title: "Device ",
        path: "/shop/product",
      },
    ],
  },
  {
    title: "Safety suits",
    path: "/",
    submenu: [
      {
        title: "Mask",
        path: "/shop/product",
      },
      {
        title: "PPI",
        path: "/shop/product",
      },
    ],
  },
  {
    title: "Hygicinic",
    path: "/",
    submenu: [
      {
        title: "Sanitizer",
        path: "/shop/product",
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
export const products = [
  {
    _id: "01",
    name: "Product 1",
    slug: "product-1",
    photos: [
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
    ],
    description: "This is the description for Product 1.",
    metaKey: "product1, example",
    company: "Company A",
    discount: 10,
    stockStatus: true,
    status: "active",
    categoryId: "64b5f8e2f2a4b8c1d4e5f6a7",
    categoryName: "Category A",
    variants: [
      { variantName: "Variant 1", variantPrice: 100 },
      { variantName: "Variant 2", variantPrice: 120 },
    ],
    defaultPrice: 110,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "03",
    name: "Product 2",
    slug: "product-2",
    photos: [
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
    ],
    description: "This is the description for Product 2.",
    metaKey: "product2, example",
    company: "Company B",
    discount: 15,
    stockStatus: false,
    status: "inactive",
    categoryId: "64b5f8e2f2a4b8c1d4e5f6a8",
    categoryName: "Category B",
    variants: [
      { variantName: "Variant 3", variantPrice: 200 },
      { variantName: "Variant 4", variantPrice: 220 },
    ],
    defaultPrice: 210,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "04",
    name: "Product 2",
    slug: "product-2",
    photos: [
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
    ],
    description: "This is the description for Product 2.",
    metaKey: "product2, example",
    company: "Company B",
    discount: 15,
    stockStatus: false,
    status: "inactive",
    categoryId: "64b5f8e2f2a4b8c1d4e5f6a8",
    categoryName: "Category B",
    variants: [
      { variantName: "Variant 3", variantPrice: 200 },
      { variantName: "Variant 4", variantPrice: 220 },
    ],
    defaultPrice: 210,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "02",
    name: "Product 2",
    slug: "product-2",
    photos: [
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
    ],
    description: "This is the description for Product 2.",
    metaKey: "product2, example",
    company: "Company B",
    discount: 15,
    stockStatus: false,
    status: "inactive",
    categoryId: "64b5f8e2f2a4b8c1d4e5f6a8",
    categoryName: "Category B",
    variants: [
      { variantName: "Variant 3", variantPrice: 200 },
      { variantName: "Variant 4", variantPrice: 220 },
    ],
    defaultPrice: 210,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const orderList: OrderListItem[] = [
  {
    title: "Sorting By Latest",
    value: "createdAt",
    order: "asc",
  },
  {
    title: "Name (A - Z)",
    value: "name",
    order: "asc",
  },
  {
    title: "Name (Z - A)",
    value: "name",
    order: "desc",
  },
  {
    title: "Price (Low > High)",
    value: "defaultPrice",
    order: "asc",
  },
  {
    title: "Price (High < Low)",
    value: "defaultPrice",
    order: "desc",
  },
];

export const testimonial = [
  {
    photo:
      "https://images.unsplash.com/photo-1668531282396-96bea4cacab5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
    feedback:
      "Gubergren voluptua sit diam sea clita sanctus clita et. No amet eos dolor vero tempor ipsum eirmod et, aliquyam et.",
    author: "Jhone exam",
    date: "02 july 2020",
  },
  {
    photo:
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
    feedback:
      "Gubergren voluptua sit diam sea clita sanctus clita et. No amet eos dolor vero tempor ipsum eirmod et, aliquyam et.",
    author: "Jhone exam",
    date: "02 july 2020",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1668531282396-96bea4cacab5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
    feedback:
      "Gubergren voluptua sit diam sea clita sanctus clita et. No amet eos dolor vero tempor ipsum eirmod et, aliquyam et.",
    author: "Jhone exam",
    date: "02 july 2020",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1668531282396-96bea4cacab5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
    feedback:
      "Gubergren voluptua sit diam sea clita sanctus clita et. No amet eos dolor vero tempor ipsum eirmod et, aliquyam et.",
    author: "Jhone exam",
    date: "02 july 2020",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1668531282396-96bea4cacab5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
    feedback:
      "Gubergren voluptua sit diam sea clita sanctus clita et. No amet eos dolor vero tempor ipsum eirmod et, aliquyam et.",
    author: "Jhone exam",
    date: "02 july 2020",
  },
];

export const blogData = [
  {
    photos: [
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/blog/2.jpg",
    ],
    title: "What should do in corona time?",
    author: "jhon",
    publishedDate: "02 june 2015",
    content:
      "lorTakimata at ipsum lorem duo sit takimata labore justo, tempor rebum diam aliquyam nonumy, amet labore dolore tempor lorem sanctus.e",

    tag: "health tips",
  },
  {
    photos: [
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/blog/1.jpg",
    ],
    title: "What should do in corona time?",
    author: "jhon",
    publishedDate: "02 june 2015",
    content:
      "lorTakimata at ipsum lorem duo sit takimata labore justo, tempor rebum diam aliquyam nonumy, amet labore dolore tempor lorem sanctus.e",

    tag: "health tips",
  },
  {
    photos: [
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/blog/1.jpg",
    ],
    title: "What should do in corona time?",
    author: "jhon",
    publishedDate: "02 june 2015",
    content:
      "lorTakimata at ipsum lorem duo sit takimata labore justo, tempor rebum diam aliquyam nonumy, amet labore dolore tempor lorem sanctus.e",

    tag: "health tips",
  },
  {
    photos: [
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/blog/2.jpg",
    ],
    title: "What should do in corona time?",
    author: "jhon",
    publishedDate: "02 june 2015",
    content:
      "lorTakimata at ipsum lorem duo sit takimata labore justo, tempor rebum diam aliquyam nonumy, amet labore dolore tempor lorem sanctus.e",

    tag: "health tips",
  },
];
