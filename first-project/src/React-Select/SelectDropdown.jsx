import CreatableSelect from "react-select/creatable";
import AsyncSelect from "react-select/async";

//EXAMPLE - 7
//WORKING WITH THE APIs
//IMPORT ASYNC METHOD THAT COMES FROM JAVASCRIPT AND THEN USE IT TO FETCH THE DATA FROM THE API AND THEN DISPLAYING IT IN THE DROPDOWN MENU.
//IN THIS EXAMPLE WE ARE USING THE "ASYNCSELECT" COMPONENT OF REACT-SELECT TO FETCH THE DATA FROM THE API (JSON PLACE HOLDER THEN SCROLL DOWN TO THE 10 USERS API CALL) AND THEN DISPLAYING IT IN THE DROPDOWN MENU. THIS COMPONENT ALLOWS US TO FETCH THE DATA FROM THE API AND THEN DISPLAYING IT IN THE DROPDOWN MENU. THIS IS A VERY USEFUL FEATURE WHEN WE WANT TO FETCH THE DATA FROM THE API AND THEN DISPLAYING IT IN THE DROPDOWN MENU.

export default function SelectDropdown() {
  
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry", isDisabled: true},
    { value: "vanilla", label: "Vanilla" },
  ];

  const customStyles = {
    control: (defaultStyle) => ({
        ...defaultStyle,
        borderColor : "red",
        borderWidth: "4px",
        color: "brown",
        fontWeight: "bold"

    }),
    option: (defaultStyle) => ({
        ...defaultStyle,
        backgroundColor: "red",
        borderColor : "blue",
        borderWidth: "3px",
        color: "pink",

    }),
  };

  return (
    <div style={{ width: "200px", margin: "0 auto", marginTop: "50px" }}>
      <CreatableSelect 
        options={options}
        onChange={(selected) => console.log(selected)}
        placeholder="Select your fruit"
        isClearable
        isDisabled={false}
        defaultValue={options[1]}
        isSearchable={false}
        styles={customStyles}
      />
      <br />
      <AsyncSelect 
        loadOptions={(inputValue) => {
          return fetch(`https://jsonplaceholder.typicode.com/users?username=${inputValue}`)
            .then((response) => response.json())
            .then((data) => data.map((user) => ({
                value: user.id,
                label: user.name,
              })));
        }}
      />
    </div>
  );
}































// //EXAMPLE - 7
// //WORKING WITH THE APIs
// //IMPORT ASYNC METHOD THAT COMES FROM JAVASCRIPT AND THEN USE IT TO FETCH THE DATA FROM THE API AND THEN DISPLAYING IT IN THE DROPDOWN MENU.
// //IN THIS EXAMPLE WE ARE USING THE "ASYNCSELECT" COMPONENT OF REACT-SELECT TO FETCH THE DATA FROM THE API (JSON PLACE HOLDER THEN SCROLL DOWN TO THE 10 USERS API CALL) AND THEN DISPLAYING IT IN THE DROPDOWN MENU. THIS COMPONENT ALLOWS US TO FETCH THE DATA FROM THE API AND THEN DISPLAYING IT IN THE DROPDOWN MENU. THIS IS A VERY USEFUL FEATURE WHEN WE WANT TO FETCH THE DATA FROM THE API AND THEN DISPLAYING IT IN THE DROPDOWN MENU.


// import CreatableSelect from "react-select/creatable";
// import AsyncSelect from "react-select/async";


// export default function SelectDropdown() {
  
//   const options = [
//     { value: "chocolate", label: "Chocolate" },
//     { value: "strawberry", label: "Strawberry", isDisabled: true},
//     { value: "vanilla", label: "Vanilla" },
//   ];

//   const customStyles = {
//     control: (defaultStyle) => ({
//         ...defaultStyle,
//         borderColor : "red",
//         borderWidth: "4px",
//         color: "brown",
//         fontWeight: "bold"

//     }),
//     option: (defaultStyle) => ({
//         ...defaultStyle,
//         backgroundColor: "red",
//         borderColor : "blue",
//         borderWidth: "3px",
//         color: "pink",

//     }),
//   };

//   return (
//     <div style={{ width: "200px", margin: "0 auto", marginTop: "50px" }}>
//       <CreatableSelect 
//         options={options}
//         onChange={(selected) => console.log(selected)}
//         placeholder="Select your fruit"
//         isClearable
//         isDisabled={false}
//         defaultValue={options[1]}
//         isSearchable={false}
//         styles={customStyles}
//       />
//       <br />
//       <AsyncSelect 
//         loadOptions={(inputValue) => {
//           return fetch(`https://jsonplaceholder.typicode.com/users?username=${inputValue}`)
//             .then((response) => response.json())
//             .then((data) => data.map((user) => ({
//                 value: user.id,
//                 label: user.name,
//               })));
//         }}
//       />
//     </div>
//   );
// }





//EXAMPLE - 6
//CREATING A NEW OPTION IN THE DROPDOWN MENU BY USING "CREATABLESELECT" COMPONENT OF REACT-SELECT. THIS COMPONENT ALLOWS US TO CREATE NEW OPTIONS IN THE DROPDOWN MENU BY TYPING IN THE INPUT AREA AND THEN SELECTING THE "CREATE" OPTION THAT APPEARS BELOW THE INPUT AREA. THIS IS A VERY USEFUL FEATURE WHEN WE WANT TO ALLOW USERS TO ADD THEIR OWN OPTIONS TO THE DROPDOWN MENU.


// import CreatableSelect from "react-select/creatable";

// export default function SelectDropdown() {
  
//   const options = [
//     { value: "chocolate", label: "Chocolate" },
//     { value: "strawberry", label: "Strawberry", isDisabled: true},
//     { value: "vanilla", label: "Vanilla" },
//   ];

//   const customStyles = {
//     control: (defaultStyle) => ({
//         ...defaultStyle,
//         borderColor : "red",
//         borderWidth: "4px",
//         color: "brown",
//         fontWeight: "bold"

//     }),
//     option: (defaultStyle) => ({
//         ...defaultStyle,
//         backgroundColor: "red",
//         borderColor : "blue",
//         borderWidth: "3px",
//         color: "pink",

//     }),
//   };

//   return (
//     <div style={{ width: "200px", margin: "0 auto", marginTop: "50px" }}>
//       <CreatableSelect 
//         options={options}
//         onChange={(selected) => console.log(selected)}
//         placeholder="Select your fruit"
//         isClearable
//         isDisabled={false}
//         defaultValue={options[1]}
//         isSearchable={false}
//         styles={customStyles}
//       />
//     </div>
//   );
// }








// //EXAMPLE - 5
// //CHANGING THE COLOR OF TEXT AND BORDER AND BACKGROUND OF sELECTED OPTION IN THE DROPDOWN MENU BY USING "STYLES" PROPS.



// import Select from "react-select";
// export default function SelectDropdown() {
  
//   const options = [
//     { value: "chocolate", label: "Chocolate" },
//     { value: "strawberry", label: "Strawberry", isDisabled: true},
//     { value: "vanilla", label: "Vanilla" },
//   ];

//   const customStyles = {
//     control: (defaultStyle) => ({
//         ...defaultStyle,
//         borderColor : "red",
//         borderWidth: "4px",
//         color: "brown",
//         fontWeight: "bold"

//     }),
//     option: (defaultStyle) => ({
//         ...defaultStyle,
//         backgroundColor: "red",
//         borderColor : "blue",
//         borderWidth: "3px",
//         color: "pink",

//     }),
//   };

//   return (
//     <div style={{ width: "200px", margin: "0 auto", marginTop: "50px" }}>
//       <Select
//         options={options}
//         onChange={(selected) => console.log(selected)}
//         placeholder="Select your fruit"
//         isClearable
//         isDisabled={false}
//         defaultValue={options[1]}
//         isSearchable={false}
//         styles={customStyles}
//       />
//     </div>
//   );
// }









//EXAMPLE - 5
//DIFFERENT FUNCTIONALITIES LIKE 
// 1-CLEAR THE INPUT AREA, 
// 2-APPLYING THE PLACEHOLDER TEXT, 
// 3-DISABLE THE WHOLE DROPDOWN TO ACTION ANYTHING.       
// 4-SETTING THE DEFAULT VALUE IN THE INPUT SECTION.
// 5-PREVENTING USER TO SEARCH ANYTHING IN THE INPUT AREA BY TYPING.

// import Select from "react-select";

// export default function SelectDropdown() {
  
//   const options = [
//     { value: "chocolate", label: "Chocolate" },
//     { value: "strawberry", label: "Strawberry" },
//     { value: "vanilla", label: "Vanilla" },
//   ];

//   return (
//     <div style={{ width: "200px", margin: "0 auto", marginTop: "50px" }}>
//       <Select
//         options={options}
//         onChange={(selected) => console.log(selected)}
//         placeholder="Select your fruit"
//         isClearable
//         isDisabled={false}
//         defaultValue={options[1]}
//         isSearchable={false} 
//       />
//     </div>
//   );
// }













// //EXAMPLE - 4
// //SAME VALUES PRINTING BUT WITHOUT USE STATE HOOK AND PRINTING IN THE CONSOLE LOG AS AN ARRAY FORM.

// import Select from "react-select";

// export default function SelectDropdown() {
  
//   const options = [
//     { value: "chocolate", label: "Chocolate" },
//     { value: "strawberry", label: "Strawberry" },
//     { value: "vanilla", label: "Vanilla" },
//   ];

//   return (
//     <div style={{ width: "200px", margin: "0 auto", marginTop: "50px" }}>
//       <Select
//         options={options}
//         onChange={(selected) => console.log(selected)}
//       />
//     </div>
//   );
// }












//EXAMPLE - 3
// //THE MAIN FEATURE OF REACT-SELECT IS MULTI SELECT
// //NAVIGATE TO THE COMPONENTS INTO THE REACT-SELECT.COM THEN SCROLL DOWN TO THE "COMMON PROPS" WHERE WE WILL FIND ALL MULTIPLE FUNCTIONALITES THAT WIIL BE PRACTISED HERE BELOW; RIGHT NOW WE ARE USING "ISMULTI" FEATURE.

// import { useState } from "react";
// import Select from "react-select";

// export default function SelectDropdown() {
//   const [selectedOption, setSelectedOption] = useState(null)
//   const options = [
//     { value: "chocolate", label: "Chocolate" },
//     { value: "strawberry", label: "Strawberry" },
//     { value: "vanilla", label: "Vanilla" },
//   ];

//   return (
//     <div style={{ width: "200px", margin: "0 auto", marginTop: "50px" }}>
//       <Select
//         options={options}
//         value={selectedOption}
//         onChange={setSelectedOption} isMulti
//       />
//     </div>
//   );
// }






//EXAMPLE -2
// import Select from "react-select";
// import { useState } from "react";

// //EXAMPLE - 2
// //DROPDOWN MENU CREATION FROM REACT-SELECT WITH STATE MANAGEMENT, IF THE VALUES ARE EXPECTED TO BE SENT TO THE DATABASE OR PRINT THEM.
// export default function SelectDropdown() {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const options = [
//     { value: "chocolate", label: "Chocolate" },
//     { value: "strawberry", label: "Strawberry" },
//     { value: "vanilla", label: "Vanilla" },
//   ];

//   return (
//     <div style={{ width: "200px", margin: "0 auto", marginTop: "50px" }}>
//       <Select
//         options={options}
//         value={selectedOption}
//         onChange={setSelectedOption}
//       />
//       <p>{selectedOption?.label}</p>
//     </div>
//   );
// }












//EXAMPLE - 1
//SIMPLE DROPDOWN MENU CREATION FROM REACT-SELECT
//
//THIS VALUES LIST WAS PUT UP FROM REACT-SELECT.COM/HOME PAGE
// export default function SelectDropdown() {
//     const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ];

//   return (
//     <div style={{ width: '200px', margin: '0 auto', marginTop: '50px' }}>
//       <Select options={options} />
//     </div>
//   )
// }
