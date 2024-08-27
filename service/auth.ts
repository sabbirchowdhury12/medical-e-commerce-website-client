export const storeTOLocalStorage = (name: string, data: any) => {
  localStorage.setItem(name, data);
};

export const getFromStorage = (name: string) => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(name);
    if (data) {
      const cartProducts = JSON.parse(data);
      return cartProducts;
    }
  }
};
