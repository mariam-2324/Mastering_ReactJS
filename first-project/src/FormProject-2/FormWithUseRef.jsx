import { useRef } from "react";

export default function FormWithUseRef() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", nameRef.current.value);
    console.log("Email:", emailRef.current.value);
  };

  return (
    <>
      <div style={{marginTop: "150px"}}>
        <h2 style={{
          color: "fuchsia",
          textAlign: "center"
          }}>Form Handling with UseRef Hook:</h2>
        <div />
        <div
          style={{
            color: "dimgray",
            textAlign: "center"
          }}
        >
          <form onSubmit={handleSubmit}>
            <br />
            <br />
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your name"
              ref={nameRef}
            />
            <br />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder="Email please..." ref={emailRef} />
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
