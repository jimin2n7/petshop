import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Dogs from './components/pages/Dogs';
import Cart from './components/pages/Cart';
import Navbar from './components/Navbar';
import {useEffect, useState, createContext} from 'react'
import axios from 'axios';

export const cartContext = createContext()
function App() {
  const [myCart, setCart] = useState([])
  const [allDogs, setAllDogs] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    async function getDate(){
      const res = await axios.get('https://my-json-server.typicode.com/jimin2n7/dbpet/pets')
      return res
    }
    getDate().then(res => setAllDogs(res.data))
    getDate().catch(err => console.log(err))
  },[])

  return (
    <cartContext.Provider value={{myCart,setCart, total, setTotal}} >
    <Router>
      <Navbar/>
      <div className="page-container">
        <Home/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dogs' element={<Dogs allDogs={allDogs} />} />
          <Route path='/checkout' element={<Cart/>} />
        </Routes>
      </div>
    </Router>
    </cartContext.Provider>
  );
}

export default App;
