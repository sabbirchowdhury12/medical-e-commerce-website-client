// import jwt from 'jsonwebtoken';

// export const decodeToken = (token: string): any => {
//   try {
//     // Decode the token without verifying the signature
//     const decoded = jwt.decode(token);

//     // Return the decoded token payload
//     return decoded;
//   } catch (error) {
//     console.error('Error decoding token:', error);
//     return null;
//   }
// };

export const setUserToLocalStorage = (user: any) => {
  localStorage.setItem("e-commerce_User", JSON.stringify(user));
};
export const setAccessToLocalStorage = (token: string) => {
  localStorage.setItem("accessToken", JSON.stringify(token));
};

export const getUserFromStorage = (): any => {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem("user");
    if (item) {
      try {
        return JSON.parse(item);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        return null;
      }
    }
    return null;
  }
  return null;
};
