# FUNCTION & EVENTS

#### While working in the jsx files making components we sometime have to work on the external functions, here we make them.
like here a simple simple jsx function snippet with export ; 👇

```
function Hey() {
    
}
export default Hey;
```

#### but now an external function comes in order to work in the outside addition.

**NOTE**
* This is called an External function.`function Greet()` 


```
function Hey() {
    function Greet() {
        return "Good Day";
    }
    return <h3>Have a {Greet()}</h3>
}

export default Hey;
```


