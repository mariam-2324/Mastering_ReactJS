// import Greeting from "./Greeting";
// import GreetingWithStyle from "./GreetingWithStyle";
// import WithStyle from "./Hoc/WithStyle";
// import Portals from "./Portals/Portals";
// import CurrentWeather from "./Weather-Project1/CurrentWeather";
// import TodoInput from "./ReduxTesting/TodoInput";
// import TodoList from "./ReduxTesting/TodoList";
// import FormYup from "./YupFormFormation/FormYup";
// import BasicValidationForm from "./FormProject-2/BasicValidationForm";
// import FormWithUseRef from "./FormProject-2/FormWithUseRef";
// import AdvancedForm from "./FormProject-2/AdvancedForm";
// import MultiFormHandling from "./FormProject-2/MultiFormHandling";
// import SimpleFormHandling from "./FormProject-2/SimpleFormHandling";
// import Props from "./PropsOrProperties/Props";
// import Boundries from "./ErrorBoundries/Boundries";
// // import SelectDropdown from "./React-Select/SelectDropdown";

import { decrement, increment } from "./Redux-CounterApp/CounterSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const myState = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 px-4 ">
        <h1 className="text-4xl bg-gray-500 font-bold text-center m-9 uppercase">
          Redux Counter App
        </h1>
        <div className="bg-stone-400 rounded-2xl shadow-2xl px-10 py-8 flex flex-col items-center space-y-8 border-pink-500">
          <h2 className="text-7xl font-black drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            {myState}
          </h2>

          <div className="flex gap-6">
            <button
              onClick={() => dispatch(increment())}
              className={
                "${color} ${border} bg-emerald-800 border-4 border-green-500 text-lg font-bold px-8 py-3 rounded-lg shadow-2xl hover:scale-105 transition transform duration-300 ease-in-out"
              }
            >
              ➕
            </button>

            <div>
              <button
                onClick={() => dispatch(decrement())}
                className={
                  "${color} ${border} bg-emerald-800 border-4 border-green-500 text-lg font-bold px-8 py-3 rounded-lg shadow-2xl hover:scale-105 transition transform duration-300 ease-in-out"
                }
              >
                ➖
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  //bg-indigo-700 border-4 border-green-700
}

export default App;

// TODO APP---REDUX
{
  /* <h1 className="text-center text-teal-700 text-4xl font-bold my-8">📝 Add your Tasks: </h1>
    <TodoInput />
    <TodoList /> */
}

// ERROR BOUNDRIES:

// import Props from "./PropsOrProperties/Props";
// import Boundries from "./ErrorBoundries/Boundries";

// function App() {
//   const user = {
//     name : "Naima",
//     age : 40,
//     city: "Karachi"

//   }

//   const user1 = null

//   return(
//     <>
//     <Boundries>
//     <Props user = {user}/>
//     </Boundries>
//     <Boundries fallback={<h4>Custom Fallback UI: An error occurred while rendering the user information.</h4>}>
//     <Props user = {user1}/>
//     </Boundries>

//     </>
//   )

// }

// export default App;

// import { lazy, Suspense } from "react";
// import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

// const Home = lazy(() => import("./LazyLoading&Suspense/Home"));
// const About = lazy(() => import("./LazyLoading&Suspense/About"));
// const Contact = lazy(() => import("./LazyLoading&Suspense/Contact"));
// const Products = lazy(() => import("./LazyLoading&Suspense/Products"));
// const Phone = lazy(() => import("./LazyLoading&Suspense/Phone"));
// const Laptop = lazy(() => import("./LazyLoading&Suspense/Laptop"));
// const User = lazy(() => import("./LazyLoading&Suspense/User"));
// const NotFound = lazy(() => import("./LazyLoading&Suspense/NotFound"));

// function App() {

//   return (
//     <BrowserRouter>
//       <h1>React Router Example</h1>
//       <nav>
//         <Link to="/">Home</Link> |
//         <Link to="/about">About</Link> |
//         <Link to="/contact">Contact Us</Link> |
//         <Link to="/user/10">User</Link> |
//         <Link to="/products">Products</Link>
//       </nav>

//       <Suspense fallback={<h2>Loading Page...</h2>}>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/user/:id" element={<User />} />

//         <Route path="*" element={<NotFound />} />
//         <Route path="/products" element={<Products />}>
//         <Route path="phone" element={<Phone />} />
//         <Route path="laptop" element={<Laptop />} />
//         </Route>
//       </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// }

// export default App;

// HIGHER ORDER COMPONENT  (HOC)
// const ProtectedDashboard = WithAuth(Dashboard)
// function App() {

//   return (
//     <>
//        <Greetings name="startLearning" />
//        <GreetingWithStyle name="With Enthusiasm"/>
//        <ProtectedDashboard />
//        <PostListWithData />
//     </>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// import Home from "./Navbar-Routes/Home.jsx";
// import About from "./Navbar-Routes/About.jsx";
// import Contact from "./Navbar-Routes/Contact.jsx";
// import User from "./Navbar-Routes/User.jsx";
// import Products from "./Navbar-Routes/Products.jsx";
// import Phone from "./Navbar-Routes/Phone.jsx";
// import Laptop from "./Navbar-Routes/Laptop.jsx";
// import NotFound from "./Navbar-Routes/NotFound.jsx";

// function App() {

//   return (
//        <BrowserRouter>
//        <h1>React Router Example</h1>
//        <nav>
//         <Link to='/'>Home</Link> |
//         <Link to='/about'>About</Link> |
//         <Link to='/contact'>Contact Us</Link> |
//         <Link to='/user/10'>User</Link> |
//         <Link to='/products'>Products</Link>
//        </nav>

//        <Routes>
//         <Route path='/' element={<Home />}/>
//         <Route path='/about' element={<About />}/>
//         <Route path='/contact' element={<Contact />}/>
//         <Route path='/user/:id' element={<User />}/>
//         <Route path='*' element={<NotFound />}/>
//         <Route path='/products' element={<Products />}>
//         <Route path='phone' element={<Phone />}/>
//         <Route path='laptop' element={<Laptop />}/>
//         </Route>
//        </Routes>
//        </BrowserRouter>
//   );
// }
