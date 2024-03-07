import { Link, useParams } from "react-router-dom"
import { coffeeapi } from "../api/Coffee_ap"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addcart } from "../redux/cartslice"
import { Badge } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


// import {Link} from "react-router-dom"

function Coffee_detail() {
    const getdata = useSelector((state)=>state.cartReducer.carts)
    const [numb, setNumb] = useState(1)
    const decrement = () => {
        if (numb > 1) {
            setNumb(numb - 1)
        }
    }
    const increment = () => {
        if (numb < 10) {
            setNumb(numb + 1)
        }
    }
    const dipatch = useDispatch()
    const add = (get1)=>{
        dipatch(addcart(get1))
    }
    const { id } = useParams()
    const get1 = coffeeapi.find((a) => a.id == id)
    return (
        <><div className="detail">
            <div className='container-fluid'>
                <nav className="navbar navbar-expand-lg bg-transparent">
                    <div className="container-fluid">
                        <Link className="navbar-brand border p-2 shadow shadow-4" to="/">BINZAY</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/Pastries">Pastries</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/Bakes">Bakes</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
        <Link className="btn btn-primary " aria-current="page" to="/Shoppingcart">
          <Badge badgeContent={getdata.length} color="primary">
  <ShoppingCartIcon color="action" />
</Badge></Link>
        </li>
       
       
        
      </ul>
                        </div>
                    </div>
                </nav>
            </div><div className="row1 mt-5">
                <div className="deta">
                    <img src={get1.image} style={{ height: "500px" }} alt="" />
                </div>
                <div className="deta dddd">
                    <h2>{get1.title}</h2>
                    <p><span className="fw-bold fs-5 mx-2">Description :</span>{get1.description.slice(0, 60)}...</p>
                    <p><span className="fw-bold fs-5 mx-2">Category :</span>{get1.category}</p>
                    <p><span className="fw-bold fs-5 mx-2">Price :</span>${get1.price}</p>
                    <p><span className="fw-bold fs-5 mx-2">Brand :</span>{get1.brand}</p>
                    <p><span className="fw-bold fs-5 mx-2">Rating :</span>{get1.rating}

                        <i className="fa-solid ms-2 text-warning fa-star" /><i className="fa-solid text-warning fa-star" /><i className="fa-solid text-warning fa-star" /><i className="fa-solid text-warning fa-star" /><i className="fa-solid text-warning fa-star" />

                    </p>

                    <div className="jjjj">
                        <button onClick={decrement} className="p-2 rounded-5 w-25 mx-5">-</button>
                        <p className="mx-4">{numb}</p>
                        <button onClick={increment} className="p-2 rounded-5 w-25 mx-5">+</button>
                    </div>
                    <div className="text-center mt-2"><button className="w-75 p-2 rounded-5" onClick={()=>add(get1)}>Add To Cart</button></div>


                </div>
            </div>


        </div></>
    )
}

export default Coffee_detail
