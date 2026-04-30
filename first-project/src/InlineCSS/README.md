# INLINE CSS 🧑‍🎨
In the inline style we give the css elements in the form of object under the component codeline, look at the example below.
There are a few method to apply inline CSS styling.

## 1st Method

```
function InlineStyle() {
  const compStyling = {
    color: "green",
    backgroundColor: "red", 
      }
 
    return(
        <>
          <h3 style={compStyling}>Copying the same component</h3>
          
        </>

    );
}
export default InlineStyle;
```

## 2nd Method
In this method we can directly pass the CSS styling in the HTML TAGS, no need to create an object.

```
function NewInline() {
    
    return(
        <>
           <h3 style={{color: "yellow", backgroundColor: "pink"}}>Lesson</h3> 
           <p>In this simple project i learned how to first modify or edit any file given by the software/utility.</p>
        </>
    );
}
export default NewInline;
```

## Importing the above Component files in App.jsx 🎡


**After applying the css styling these components'file path along with call in the Return function must be given in the main React component called `App.jsx`. LIke below 👇** 


```
import InlineStyle from './InlineCSS/InlineStyle';
import NewInline from './InlineCSS/NewInline';

function App() {
  const name = "Mariam Saad";
  return (
    <>
      <h1>Welcome To The World of React | {name}</h1>
      <InlineStyle />
      <NewInline />
       
      <img src={logo192} alt="" width="200px"/>
    </>
  );
}

export default App;


```