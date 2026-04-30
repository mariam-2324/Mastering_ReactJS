
import './Arr.css'
//3RD EXAMPLE (COMPLEX ONE WHERE WE APPLY ARRAY, OBJECT & FUNCTION AT THE SAME TIME.)
//CREATING ARRAY OF OBJECT WHERE WILL BE THE VALUES OF MULTIPLE USERS AND THEY WILL BE PRINTED.
//1- CREATING AN ARRAY WITHIN VARIABLE IN WHICH WE STORE MULTIPLE OBJECTS.
//2- STARTING A LOOP UNDER THE RETURN METHOD WHERE IT WILL PRINT THE VALUES

function Object() {
    const arrObj = [
        {Name: 'Abaida', Lastname: 'Afghan', profession: 'Web Developer', Experience: '4 Yrs experience'},
        {Name: 'Arshian', Lastname: 'Afghan', profession: 'IT Developer', Experience: 'No experience'},
    ]
    function fullData(user){
        return user.Name + " " + user.Lastname;      //WITHOUT CONCATINATION SIGN WE CAN JOINT THE VALUES AS WELL. AND CONCATINATION IS POSSIBLE TOO.
    }
    return(
        <>
        <h3 className='objCss'>Person Data</h3>
        <ol>
            {arrObj.map((user, index) => (
                <li>{fullData(user)} is professionally {user.profession}</li>


            ))}
        </ol>
        
        </>
    )
}
export default Object;




//2ND EXAMPLE
//THE OUTPUT IS HORIZONTALLY APPEARS.AND FOR THIS A NEW LOCAL FUNCTION BE CREATED UNDER THE MAIN FUNCTION AND CALL IT WITH IN THE VARIABLE WHERE ALL KEY, VALUE PAIRS STORED IN IT, SIDE BY SIDE THE HTML ELEMENT.LASTLY, FOR TAKING THE VALUES HORIZONTALLY, PASS THE NEW FUNCTION'S PARAMETER WITHIN IT'S RETURN METHOD. 
//IN SHORT, AN OBJECT CAN ALSO BE USED WITH FUNCTION.

// function Object() {
//     const Obj = {Code: "React", ProblemSolving: "Leet code", Solution: "Python"}

//     function Tech(act){
//         return act.Code + " " + act.Solution;
        
//     }
//     return(
//         <>
//         <h2 className="objCss">TECH ACTIVITIES</h2>

//         <p>Tech Schedule: {Tech(Obj)}</p>
//         <p>Code: {Obj.Code}</p>
//         <p>ProblemSolving: {Obj.ProblemSolving}</p>
//         <p>Solution: {Obj.Solution}</p>
//         </>
//     )
// }
// export default Object;





//1ST EXAMPLE, BUT HERE THE OUTPUT COMES VERTICALLY.
// function Object() {
//     const Obj = {Code: "React", ProblemSolving: "Leet code", Solution: "Python"}
//     return(
//         <>
//         <h2 className="objCss">TECH ACTIVITIES</h2>
//         <p>Code: {Obj.Code}</p>
//         <p>ProblemSolving: {Obj.ProblemSolving}</p>
//         <p>Solution: {Obj.Solution}</p>
//         </>
//     )
// }
// export default Object;
