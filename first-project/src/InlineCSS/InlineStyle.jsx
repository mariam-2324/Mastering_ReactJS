// in inline style we give the css elements in the form of object under the component codeline, look at the example below.


function InlineStyle() {
  const compStyling = {
    color: "green",
    backgroundColor: "red", 
      }
 
    return(
        <>
          <h3 style={compStyling}>Copying the same component</h3>
          <p className="test">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore reiciendis tempora atque ullam reprehenderit nihil eum fugiat, eveniet accusamus dolorum autem molestiae excepturi labore quis quo illo ipsa at!</p>
          
        </>

    );
}
export default InlineStyle;
















// function New() {
//     return(
//         <div>
//             <h2>Creating a New Component.</h2>
//         </div>
//     );
// }
// export default New;
