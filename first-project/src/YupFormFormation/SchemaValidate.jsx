import * as yup from 'yup';

export const registerSchema = yup.object({
    name: 
        yup.string()
        .trim()
        .lowercase()
        .test(
            "no-admin",
            "Admin not allowed",
            value => value !== "admin"
        )
        .required("Name is required."),
    email: 
        yup.string()
        .when("age", {
            is: age => age >= 25,
            then: schema =>
                schema
                    .email("Invalid Email")
                    .required("Email is required if age is 25 or above."),
            otherwise : schema => schema.notRequired()
        })
        .trim(),

        //ONLINE VALIDATION VIA FAKE API 
        // .test(
        //     "check-gmail",
        //     "Email already exists",
        //     async value => {
        //         const res = await fetch(`https://jsonplaceholder.typicode.com/users?email=${value}`);
        //         const data = await res.json();
        //         return data.length === 0;
        //     }
        // ),
    password: 
        yup.string()
        .trim()
        .min(6, "password must be atleast 6 characters."),
    confirmPassword:
        yup.string()
        .trim()
        .oneOf([yup.ref("password")], "Password must match")
        .required(),
    age:
        yup.number()
        .required("Age is required")
        .min(18, "Age must be at least 18")
        .max(50, "Age must be less than or equals to 50"),
        
        skills:
        yup.array()
        .of(yup.string())
        .min(2, "Select at least 2 skills")
        .max(3, "Select at least 3 skills"),
        
    

})


