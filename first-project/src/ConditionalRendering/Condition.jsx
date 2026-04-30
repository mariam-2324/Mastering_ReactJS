//CONDITIONAL RENDERING

import './ifElse.css'




//EXAMPLE 4TH- CONDITIONAL RENDERING IS USED IN THE CSS FILE. (WITH LITTLE CHANGE)
//NOW, THE CSS CLASSNAME WILL BE CODED OUTSIDE OF THE HTML TAG.
function Condition() {
    const isVisible = true;
    const showing = isVisible ? 'show' : 'hide';
    

    //HERE BELOW, IF THE STATEMENT IS TRUE THEN THE BOTH TEXTS WILL BE PRINTING OTHERWISE ONLY ONE AND THAT'S "its NOT showing", AS ITS NOT RENDERING THE CSS CLASS INSIDE IT.
    return <> 
              <h4 className={showing}>its showing by outside CSS classes.</h4>                         
              <h4>its NOT showing</h4>                         
         
    </>

    
    
    
}
export default Condition;






//EXAMPLE 4TH- CONDITIONAL RENDERING IS USED IN THE CSS FILE.
// function Condition() {
//     const isVisible = false;

//     //HERE BELOW, IF THE STATEMENT IS TRUE THEN THE BOTH TEXTS WILL BE PRINTING OTHERWISE ONLY ONE AND THAT'S "its NOT showing".
//     return <> 
//               <h4 className={isVisible ? 'show' : 'hide'}>its showing</h4>                         
//               <h4>its NOT showing</h4>                         
         
//     </>

    
    
    
// }
// export default Condition;







//EXAMPLE 3ND- LOGICAL OPERATORS IN CONDITIONAL RENDERING
//1- NOTE: WE CAN ALSO APPLY LOGICAL OPERATORS IN TRADITIONAL IF-ELSE CONDITION BUT WITHOUT ELSE STATEMENT.
// function Condition() {
//     const hasMessage = true;    //as its static so as the value change here the output will be change.
    
//     //&&(AND)OPERATOR WILL CHECK IF THE BOTH CONDITIONS HAVE THE VALUES THEN IT WILL PRINT OTHERWISE NOT. LIKE IF THE "HASMESSAGE" HAS TRUE (in above variable) THEN IT WILL PRINT THE "Its THAT..!" OTHERWISE NOT.
//     return <>                          
//     {hasMessage && <h4>Its THAT..!</h4>}    
//     </>

    
    
    
// }
// export default Condition;







//EXAMPLE 2ND- CONDITIONAL STATEMENT IN "TERNARY OPERATOR"
//1- NOTE: THAT TERNARY OPERATORS ARE USED TO ONE LINE STATEMENT, FOR MULTIPLE LINES ONE BETTER USE TRADTIONAL IF ELSE STATEMENT.
// function Condition() {
//     const isLoggedIn = false;    //as its static so as the value change here the output will be change.
    
//     return <>
//     {isLoggedIn ? <h4>Its THAT..!</h4> : <h4>Its NOT...!</h4>}
//     </>

    
    
    
// }
// export default Condition;








//EXAMPLE 1ST- LITTLE BIT CHANGE; if one don't want to write Return everytime then they can store this Return function in a variable and then print it within Return function. SEE BELOW;
//1- THE COMPONENT FUNCTION WILL BE THE SAME APPLIED.
// function Condition() {
//     const isLoggedIn = false;    //as its static so as the value change here the output will be change.
//     let message;

//     if(isLoggedIn){
//         message = <h3 className='cond'>The User is logged in</h3>

//     }else{
//         message = <h3 className='cond'>Please login in</h3>

//     }
//     return <><p>{message}</p></>

    
    
// }
// export default Condition;







//1ST EXAMPLE
//IN THIS CODE BLOCK THE USER ENTERENCE HAS BEEN SURED IF ITS LOGIN OR NOT. BUT THE GAME IS THAT ITS STATIC CONDITION, MEANS, NOT RENDERING BY APIs. SO IT CAN BE SEEN THAT THE TRUE STATEMENT IS ALREADY PASSED WITHIN VARIABLE.(and the output is the True obviously).

//1- THE COMPONENT FUNCTION WILL BE THE SAME APPLIED.
// function Condition(params) {
//     const isLoggedIn = true;

//     if(isLoggedIn){
//         return <h3 className='cond'>The User is logged in</h3>

//     }else{
//         return <h3 className='cond'>Please login in</h3>

//     }

    
    
// }
// export default Condition;