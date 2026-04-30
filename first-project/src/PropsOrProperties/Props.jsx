//4TH EXAMPLE---PREVIOUSLY, WE LEARNED MULTIPLE PROPERTIES WITHIN STRING, INTEGER & ARRAY FORM, NOW...
//PASSING THE FUNCTIONS IN THE MAIN COMPONENT LIKE STRING, INTEGER, ARRAYS VALUES PREVIOUSLY.
// FOR PASSING THE FUNCTION WE WILL CREATE A NEW COMPONENT CALLED 'BUTTON'

function Props({user}) {

    return(
        <>
        <h3>{user.name}, {user.age}</h3>
        </>
    ) 
    
}
export default Props;














//ERROR BOUNDRIES-----TOPIC
// function Props({user}) {

//     return(
//         <>
//         <h3>{user.name}, {user.age}</h3>
//         </>
//     ) 
    
// }
// export default Props;

















// function Props({Interest}) {
         

//     return(
//         <>
//         {/* <h3>The topic old is, {Topic}</h3>
//         <h4>The point is: {Point}</h4>
//         <h4>The Library of: {LibraryOf}</h4>
//         <p>TimeSlot: {Code}</p> */}
//         <ol>
//             {Interest.map((interest, index) => (
//                 <li key={index}>{interest}</li>
//             ))}
//         </ol>
//         </>
//     ) 
    
// }
// export default Props;
//4TH EXAMPLE
//PROPERTIES APPLIED IN AN ARRAY WITH MANY OTHER DATAS/DATA STRUCTURES.
//SCENARIO: IF THE USER WANT TO SEND THE MANY VALUES AT ONCE THEN WE CAN MAKE WORK FROM ARRAYS DATA STRUCTURE.
//PROCESS
//1- CREATE AN ARRAY IN THE MAIN COMPONENT.
//2- PASS THE ARRAY'S VARIABLE NAME IN THE SUB-COMPONENT'S MAIN FUNCTION'S PARAMETER.
//3- START A MAP LOOP TO GET THE ALL ARRAY'S ELEMENTS UNDER THE UNORDERED/ORDERED LIST TAG(optional).
//4- TO GET THE INDICES OF EACH VALUE PASS THE KEY AND INDEX WITHIN LIST TAG AFTER THE MAP LOOP.


// function Props({Interest}) {
         

//     return(
//         <>
        
//         <ol>
//             {Interest.map((interest, index) => (
//                 <li key={index}>{interest}</li>
//             ))}
//         </ol>
//         </>
//     ) 
    
// }
// export default Props;



//MAIN App.jsx COMPONENT
// import Props from './PropsOrProperties/Props'


// function App() {
//   const techies = ['coding', 'solving', 'debugging', 'creating']



//   return(
//     <>
//     <Props Interest= {techies}/>  
      
    
//     </>
//   )
     

// }

// export default App;






//3RD EXAMPLE
//IF USER DON'T GIVE THE VALUE THEN WE CAN SYSTEMED THE DEFAULT SETTING, BY WHICH THE BLANK USER-INPUT WILL AUTOMATICALLY FILLED BY OUR SET VALUE.
//1- THE DEFAULT VALUE JUST TO BE WRITTEN WITHIN THEIR PROPS WITH '=' IN THE COMPONENT FUNCTION.
//2- MAKESURE TO REMOVE THE PROPS FROM THE MAIN COMPONENT.
//NOTE:
//IF INTEGER HAS TO BE EVALUATED IN THE FUTURE THEN PUT THEM IN THE CURLY BRACES OTHERWISE IN THE SINGLE OR DOUBLE INVERTED COMMAS.(applicable for all React components)
//WE CAN'T CHANGE THE VALUE AFTER TAKING AS A OUTPUT IN REACT EVERYWHERE.

// function Props({Topic='Default Value Setting', Point, LibraryOf, Code}) {
         

//     return(
//         <>
//         <h3>The topic old is, {Topic}</h3>
//         <h4>The point is: {Point}</h4>
//         <h4>The Library of: {LibraryOf}</h4>
//         <p>TimeSlot: {Code}</p>
//         </>
//     ) 
    
// }
// export default Props;



//MAIN App.jsx COMPONENT
//MAKESURE TO REMOVE THE PROPS FROM THE MAIN COMPONENT TO SEE THE DEFAULT VALUE SETTING RESULT FROM THE SUB-COMPONENT.


//import Props from './PropsOrProperties/Props'


// function App() {
//   return(
//     <>
//     <Props Point= 'Multiple Properties to show in one component calling function' LibraryOf= 'JavaScript' Code= {14}/>  
      
    
//     </>
//   )
     

// }

// export default App;








//2st EXAMPLE----LITTLE BIT CHANGE--AGAIN IF DON'T WANT CREATING THE OBJECT DESTRUCTURED FORM THEN JUST PASS THESE PROPS/PROPERTIES UNDER THE CURLY BRACES IN THE COMPONENT FUNCTION AS VARIABLES.
// function Props({Topic, Point, LibraryOf}) {

//     return(
//         <>
//         <h3>The topic old is, {Topic}</h3>
//         <h4>The point is: {Point}</h4>
//         <h4>The Library of: {LibraryOf}</h4>
//         </>
//     ) 
    
// }
// export default Props;






//2st EXAMPLE----LITTLE BIT CHANGE--IF DON'T WANT TO PASS THE PARAMETER WITHIN EACH HTML ELEMENT AND PROPERTY THEN WE JUST CREATE OBJECT-DESTRUCTION.
//THE PROPERTIES TO PASS ONCE MORE AS A VARIABLE FORM WITHIN A VARIABLE INITIATOR ALONG WITH PARAMETER. THIS IS ALSO CALLED OBJECT-DESTRUCTURE (topic of advanced JavaScript)

// function Props(properties) {
// //object-destruction, where the value of parameter will be divided in different variables.
//     const {Topic, Point, LibraryOf} = properties
         

//     return(
//         <>
//         <h3>The topic old is, {Topic}</h3>
//         <h4>The point is: {Point}</h4>
//         <h4>The Library of: {LibraryOf}</h4>
//         </>
//     ) 
    
// }
// export default Props;








//2st EXAMPLE
//THERE ARE MULTIPLE PROPERTIES CAN BE SHOWN ON THE BROWSER ALL WE NEED TO CALL THE COMPONENT AGAIN IN THE MAIN FILE WITH THE DIFFERENT KEY,VALUES IN IT. (SEE THE EXAMPLE IN THE APP.JSX)


// function Props(properties) {

//     return(
//         <>
//         <h3>The topic old is, {properties.Topic}</h3>
//         <h4>The point is: {properties.Point}</h4>
//         <h4>The Library of: {properties.LibraryOf}</h4>
//         </>
//     ) 
    
// }
// export default Props;



//AND THE MAIN App.jsx SETTING WILL BE LIKE THIS; ALL THE PREPERTIES WILL BE INJECTED IN THE COMPONENT CALLING FUNCTION WITH THEIR VALUES.
// import Props from './PropsOrProperties/Props'


// function App() {
//   return(
//     <>
//     <Props Topic= 'Properties of React' Point= 'Multiple Properties to show in one component calling function' LibraryOf= 'JavaScript'/>  
      
    
//     </>
//   )
     

// }

// export default App;








//1st EXAMPLE----LITTLE BIT CHANGE
//THERE ARE MULTIPLE OBJECTS CAN BE SHOWN ON THE BROWSER ALL WE NEED TO CALL THE COMPONENT AGAIN IN THE MAIN FILE WITH THE DIFFERENT KEY,VALUES IN IT. (SEE THE EXAMPLE below)


//SUB-COMPONENT "Props.JSX"
// function Props(properties) {

//     return <h3>The topic is, {properties.Topic}</h3>
    
// }
// export default Props;


//MAIN COMPONENT "App.jsx"
// import Props from './PropsOrProperties/Props'


// function App() {
//   return(
//     <>
//     <Props Topic= 'Properties of React'/>  
//     <Props Topic= 'Props of React'/>
//     </>
//   )
     

// }

// export default App;







//1st EXAMPLE
//THE COMPONENT TO SHOW THE VALUES IN THE BROWSER MAINLY FROM THE APP.JSX (main component).
//STEPS
//1- WE PASS THE VALUE LIKE THE OBJECT IN THE COMPONENT CALLING TAG IN THE MAIN PROJECT COMPONENT App.jsx LIKE THIS "<Props Topic= 'Properties of React'/>"
//2- PASS THE PARAMETER IN THE COMPONENT FUNCTION.
//3- THE VALUE WILL SAVE IN THE PARAMETER LIKE AN OBJECT.
//3- AND THE OBJECT'S(properties) KEY(Topic) IS CALLED IN REACT.JAVASCRIPT WITH THE PARAMETER APPLYING WITH THE FULLSTOP.
//4- IN SHORT, THE COMPONENT ITSELF SHOWING THE VALUES FIRSTLY IN THE MAIN COMPONENT AND IT PASSES THE OBJECT(KEY, VALUE) TO PARAMETER AND FINALLY THE PARAMETER IS PASSED IN THE RETURN FUNCTION.


// function Props(properties) {

//     return <h3>The topic is, {properties.Topic}</h3>
    
// }
// export default Props;