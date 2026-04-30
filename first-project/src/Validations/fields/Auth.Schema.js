import * as yup from 'yup';
import { emailSchema } from './fields/Email.schema';
import { passwordSchema } from './fields/Password.schema'; 

export const loginSchema = yup.object({
    email:emailSchema,
    password: passwordSchema
});

export const registerSchema = yup.object({
    name: yup.string().required("Name is required"),
    email:emailSchema,
    confirmPassword: yup
                 .string()
                 .oneOf([yup.ref("password")], "Password must match")
                 .required("password must be confirmed"),
});
