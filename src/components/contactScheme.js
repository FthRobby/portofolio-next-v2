import * as Yup from "yup";

export const ContactScheme = Yup.object().shape({
  name: Yup.string().max(140, "Too long!").required("Required."),
  email: Yup.string()
    .email("Invalid email.")
    .max(140, "Too long!")
    .required("Required."),
  body: Yup.string().max(280, "Too long!").required("Required."),
});
