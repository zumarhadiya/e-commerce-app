import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import {Routers, Route ,link, createBrowserRouter, RouterProvider} from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import Products from './components/Products';

const router= createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/products",
    element:<Products/>
  }
])

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <RouterProvider router={router}/>
    </div>
    </ChakraProvider>
  );
}

export default App;
