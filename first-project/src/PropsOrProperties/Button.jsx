import React from 'react'
//SUBJECT: SENDING WHOLE FUNCITON, LIKE PREVIOUSLY THE ARRAY, PROPS, AND EVEN OBJECTS WERE SENT TO THE MAIN COMPONENT(App.jsx)
// THE WHOLE FUNCTION WITHIN WHAT TO WRITE IN THE BUTTON AND WHAT FUNCTION TO RUN 
// TO SEND IN THE MAIN APP.
// 2 variables where the button's name willl be in "label" and the user-centric function will be in the "handleClick".
//LOGIC:
//SUBJECT: SENDING FUNCTION WITH THE SUBJECT OF BUTTON WORK, LIKE WHAT BUTTON'S NAME AND THE FUNCTION IT WORKS
// "onClick" k zarye kaam kiya hona chahiye ye "handleClick" batata hai.
//ab "handleClick" k andar "message" function pass hai jo k "alert" action return karega.(App.jsx mai..)

function Button({label, handleClick}) {
  return <button onClick={handleClick}>{label}</button>

}
export default Button


//rfce ---(shortcut for creating the whole component function along with div tag and import it, after creating its file.)