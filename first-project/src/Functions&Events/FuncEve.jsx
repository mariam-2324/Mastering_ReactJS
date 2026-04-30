//6TH EXAMPLE
//APPLYING MULTIPLE EVENTS IN A SINGLE ELEMENT OF HTML.
//1- HERE 2 EVENTS IS APPLIED ONE IS HOVER THE TEXT, SO AS MANY TIMES MOUSE HOVERS THE TEXT IT WILL BE INCREASING THE NUMBER OF HOVERING IT IN THE CONSOLE.
//2- SECOND EVENT IS DOUBLE CLICK SO WHENEVER THE TEXT IS CLICKED DOUBLE IT WILL SHOW THE OUTPUT TEXT IN THE CONSOLE LIKE "TEXT HAS BEEN CLICKED DOUBLE."
//note: event names must be in camel case.

function FuncEve(){
    const handleMouseOver = () => console.log("Mouse is over the text.")
    const handleDoubleClick = () => console.log("Text has been clicked double")
        
  
    
    return (
        <>
           <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, quinihil voluptatum velit.</p>
        </>
    )
    
    
}
export default FuncEve; 







//5TH EXAMPLE
//HERE IS AGAIN EXAMPLE OF INLINE FUNCTION BY CREATING A FORM INPUT.
//note: event names must be in camel case.

// function FuncEve(){
//     const Form = (event) => {
//         console.clear()       //by this the console will show the recent input only horizontally(OPTIONAL).
//         console.log("value : ", event.target.value)  // here whenever user put data it will show new line with the previous input again in the console vertically.
//     }
    
//     return (
//         <>
//         <input type="text" onChange={Form} placeholder="Type something here"/>
//         </>
//     )
    
    
// }
// export default FuncEve; 



//4TH EXAMPLE
//FUNCTIONS CAN ALSO BE BINDED BY EVENTS. FOR THE FIRST EXAMPLE HERE IS A ALERT EVENT GIVEN.
//note: event names must be in camel case.

// function FuncEve(){
//     function event() {
//         alert("Event called now !")
//     }
//     return (
//         <>
//         <button onClick={event()}>Click Here</button>
//         </>
//     )
    
    
// }
// export default FuncEve; 





//3RD EXAMPLE
// THIS IS THE NEWER ES7 VERSION FUNCTION LIKE WITHIN ARROW BRACKET ALONG WITH EXTERNAL FUNCTION REPLACEMENT WITH CONST.

// function FuncEve(){
//     const getName = (usercentric) => {
//         return usercentric;
//     }
//     const user = "Centric"
//     const user1 = "CentricToo"

//     return(
//         <>
//            <h3>This is a User {getName(user)} function.</h3>
//            <h3>This is a User {getName(user1)} function.</h3>
       
//        </>
//     ) 
    
    
// }
// export default FuncEve; 




//2ND EXAMPLE
// USER CENTRIC FUNCTION CALLING, but its also an olden version.

// function FuncEve() {
//     function getName() {
//         return "Centric"

//     }
//     return(
//         <>
//         <h3>This is a User {getName()} function.</h3>
//         </>
//     );
   
// }
// export default FuncEve;

// WE CAN PASS THE MULTIPLE TAGS AS WELL.

// function FuncEve(){
//     function getName(usercentric) {
//         return usercentric;
//     }
//     const user = "Centric"
//     const user1 = "CentricToo"

//     return(
//         <>
//        <h3>This is a User {getName(user)} function.</h3>
//        <h3>This is a User {getName(user1)} function.</h3>
       
//     </>
//     ) 
    
    
// }
// export default FuncEve; 







//1ST EXAMPLE OF EXTERNAL FUNCTION:
// function FuncEve(){
//     function Greet() {
//         return "Good Day"
//     }
//     return(
//         <>
//        <h2>Have a {Greet()}</h2>
//        <h2>Enjoy a {Greet()}</h2>
//     </>
//     ) 
    
    
// }
// export default FuncEve; 

//we can pass multiple values as well "<h2>Enjoy a {Greet()}</h2>"






























