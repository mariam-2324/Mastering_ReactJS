import Greeting from "./Greeting";
import WithStyle from "./Hoc/WithStyle";

const GreetingWithStyle = WithStyle(Greeting)

export default GreetingWithStyle;