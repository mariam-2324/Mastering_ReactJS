import { useForm } from "react-hook-form";
import { registerSchema } from "./SchemaValidate";
import { yupResolver } from "@hookform/resolvers/yup";

export default function FormYup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const afterSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h2
        style={{
          color: "cornflowerblue",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Form Validation with YUP Library:
      </h2>
      <form
        onSubmit={handleSubmit(afterSubmit)}
        style={{ textAlign: "center", marginTop: "30px"}}
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          {...register("name")}
          placeholder="Enter your name"
        />
        <p style={{ color: "red" }}>{errors.name?.message}</p>
        <br />
        <br />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          {...register("age")}
          placeholder="Add number for age"
        />
        <p style={{ color: "red" }}>{errors.age?.message}</p>
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          {...register("email")}
          placeholder="Enter your email"
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          {...register("password")}
          placeholder="Password please..."
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
        <br />
        <br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirm Password please..."
        />
        <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
        <br />
        <br />
        <label htmlFor="skills">Skills:</label>
        <br />
        <br />
        <input type="checkbox" value="React" {...register("skills")} />
        React
        <input type="checkbox" value="NodeJs" {...register("skills")} />
        NodeJs
        <input type="checkbox" value="JavaScript" {...register("skills")} />
        JavaScript
        <br />
        <p style={{ color: "red" }}>{errors.skills?.message}</p>
        <br />
        <br />
        <button type="submit" style={{ backgroundColor: "bisque" }}>
          Register
        </button>
      </form>
    </>
  );
}
