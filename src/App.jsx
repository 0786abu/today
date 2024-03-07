import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
// import Coffee from "./components/Coffee"
import Pastries from "./components/Pastries"
import Bakes from "./components/Bakes"
import Protected from "./auth/Protected"
import { useState } from "react"
import Login from "./screen/Login"
import Coffee_detail from "./components/Coffee_detail"
import Shoppingcart from "./components/Shoppingcart"
import Pastires_detail from "./components/Pastires_detail"


const App = () => {
  const [auth, setAuth] = useState(false);
  return (
    <div>
      
      <Routes>
        <Route element={<Protected auth={auth}/>}>
        <Route path="/" element={<Navbar/>}></Route>
        <Route path="/Navbar/:id" element={<Coffee_detail/>}></Route>
        <Route path="/Pastries" element={<Pastries/>}></Route>
        <Route path="/Pastries/:id" element={<Pastires_detail/>}></Route>
        <Route path="/Bakes" element={<Bakes/>}></Route>
        </Route>
        <Route path="/Shoppingcart" element={<Shoppingcart/>}></Route>
        <Route path="/Login" element={<Login setAuth={setAuth}/>}></Route>
      </Routes>
    </div>
  )
}

export default App
