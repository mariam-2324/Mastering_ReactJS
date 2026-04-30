#### Previously, the component function return the same html elements (Tags) but showed the required values but now the conditional render shows the change HTML ELEMENTS, by facing the different conditions, for this we apply conditions (if else) in the component. So applying the if statement in the component called Conditional Rendering.

**Situation** 
* if the condition is true then it returns the conventional html element but if false then it will return different HTML.
* And lastly, the value will be return traditionally like "if its true then print this, else print that".





















## LAST IMPORTANT METHOD OF `App.jsx`COMPONENT MODIFICATION WITHIN CONDITIONAL RENDERING

#### In React library rendering the components by conditional statement is widely increased. And the specific components are shown to the users by the APIs call only. So its very important to learn it.

### PROCESS
* firstly, the respective components are worked as usual.
* In the main component like, in this project folder the `App.jsx` the respective components be imported. 
* Under the component function firstly, a variable is declared within boolean value.
* Then IF-ELSE condition is applied with variable condition and returing the values.



```
import Object from './Arrays&Object/Object';
import Condition from './ConditionalRendering/Condition';


function App() {
  const isActive = false;

  if (isActive) {
    return <Object />
    
  } else {
    return <Condition />
    
  }
  

}

export default App;
```