import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const registrationValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match") // Allow undefined
    .required("Confirm Password is required"),
});

export const checkoutValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone number is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  companyName: Yup.string().required("Company/Local address is required"),
  division: Yup.string().required("Division is required"),
  district: Yup.string().required("District is required"),
  upazilla: Yup.string().required("Upazilla is required"),
  roadNo: Yup.string().required("Road number is required"),
  houseNo: Yup.string().required("House number is required"),
  paymentMethod: Yup.string().required("Please select a payment method"),
});
