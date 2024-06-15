
import './App.css'
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/login';
import Signup from './components/signup';
import Hero from './components/Hero';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Hero />
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <NavBar />
          <Login />
          <Footer />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <NavBar />
          <Signup />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider
        router={router} />
    </div>
  )
}

export default App
