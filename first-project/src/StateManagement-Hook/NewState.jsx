import { useState } from 'react'

export default function NewState() {
  //THIS IS FUNCTIONAL UPDATE METHOD
  const [count, setCount] = useState(0)

  return (
    <>
    <div>{count}</div>
    <button onClick={() => {setCount((prev) => prev + 1)}}>Click it</button>
    </>
  );

}

















// 3RD EXAMPLE

//THIS IS FUNCTIONAL UPDATE METHOD
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //   <div>{count}</div>
  //   <button onClick={() => {setCount((prev) => prev + 1)}}>Click it</button>
  //   </>
  // );





//2ND EXAMPLE FOR MULTIPLE UPDATION IN ONE CLICK
//<div>Count: {count}</div>
    // <button onClick={() => {setCount((prev) => prev + 1);setCount((prev) => prev + 1) }}>Click it</button>





// 1ST EXAMPLE

    // // THIS IS ALSO CALLED A DIRECTIVE USE OF STATE, BECAUSE WE ARE USING THE USESTATE HOOK DIRECTLY IN THE COMPONENT FUNCTION
//   const [count, setCount] = useState(0)

//   const increase = () => {
//     setCount(count + 1)
//   }
//   const decrease = () => {
//     setCount(count - 1)
//   }
//   return (
//     <div>
//       <h2>Count : {count}</h2>
//       <button onClick={increase}>Increase</button>
//       <button onClick={decrease}>Decrease</button>
//     </div>