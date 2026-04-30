# INTRODUCTION TO STATE MANAGEMENT
#### State is like a variable, anything will change in the component, state will automatically detect it and update in the DOM.

## DIFFERENCE B/W NORMAL VARIABLE & STATE ONE
**NORMAL VARIABLE** looks like, `let index = 0,`but 
**STATE VARIABLE** is `let [index, setIndex] = useState(0);`

## THE FUNCTION OF THE STATE VARIABLES(How it works & looks like)
* For example, we put the name of variable is 'index'called **State Variable** 
* Next, in State the variable setter must be used with it, like above`setIndex`, its also called `State setter function`. They both are used as the parameters in the JavaScript variable initializer `let [index, setIndex]`, and the format is just like what mentioned here and above;
     * The initial part of the setter index is specifically 'set' and the variable's first letter of the state will be capital, so the setter index's name will be like a camelCase in this way `setIndex` (it will always be coding just like that specifically)

     ### FUNCTIONALITY OF VARIABLE SETTER
     #### It helps in two ways in the 
     * First, it updates the variable's value.
     * Second, it renders the component again.(it will reload the component again, if any updation happens in the State's variable in the same component.)

    * **useState** it works when any updation or modification happens in the component then it will automatically detect the updated value and store in it and use it whenever the State variable `index`is mentioned.