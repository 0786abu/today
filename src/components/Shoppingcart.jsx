

import  { addcart, remove, removeall} from "../redux/cartslice"
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";


import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

// const [price, setPrice] = useState()
// const [quantity, setQuantity] = useState()

const Shoppingcart = () => {
  const [price, setPrice] = useState()
  const [quantity, setQuantity] = useState()
  const totalp = ()=>{
    let tprice = 0;
    getdata.map((x)=>{
      tprice +=x.price*x.qty
    })
    setPrice(tprice)
  }
  const totalqty = ()=>{
    let tqty = 0;
    getdata.map((x)=>{
      tqty += x.qty
    })
    setQuantity(tqty)
  }
  useEffect(()=>{
    totalp()
    totalqty()
  })
  const dispatch = useDispatch()
  
   const decrement = (x)=>{
    dispatch(remove(x))
   }
   
    const  increment = (x)=> {
    dispatch(addcart(x))
  }
  const REmove = (x)=>{
    dispatch(removeall(x))
  }
  
    const getdata = useSelector((state)=>state.cartReducer.carts)
  return (
    <div className="mt-5">
          <div className="container bootstrap snippets  border p-2 shadow shadow-4 bootdey m-auto">
  <div className="col-md-9 col-sm-8 col-lg-10 m-auto mt-5 ">
    
    <div className="row">
      <div className="col-md-12">
        <div className="panel panel-info panel-shadow">
          
          <div className="panel-body"> 
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr className="text-center">
                    <th>Product</th>
                    <th className="text-center">Description</th>
                    <th className="text-center">Qty</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Total</th>
                    <th className="text-center">Del-Item</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {getdata.map((x)=>{
                    return(
                        <tr key={x} className="text-center bg-white">
                    <td><img src={x.image} className="img-cart img-fluid w-25" /></td>
                    <td><p>{x.description.slice(0,40)}...</p></td>
                    
                    <td className="d-flex border justify-content-around"><button  className="mx-2 bg-transparent border border-none" onClick={()=>decrement(x)}>-</button>{x.qty}<button  className="mx-2 bg-transparent border border-none" onClick={()=>increment(x)}>+</button></td>
                    <td>${x.price}</td>
                    <td>${x.price*x.qty}</td>
                    <td onClick={()=>REmove(x)}><DeleteIcon/></td>
                    
                  </tr>
                    )
                  })}
                  
                                <tr className="bg-white">
                                    <td colSpan="4" className="text-right">Total Product</td>
                                    <td>{quantity}</td>
                                    <td></td>
                                </tr>
                                {/* <tr>
                                    <td colSpan="4" className="text-right">Total Shipping</td>
                                    <td>$2.00</td>
                                </tr> */}
                                <tr>
                                    <td colSpan="4" className="text-right"><strong>Total-Price</strong></td>
                                    <td>${price}</td>
                                    <td></td>
                                </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="butttt d-flex justify-content-between">
        <Link to="/" className="btn btn-success"><span className="glyphicon glyphicon-arrow-left" />&nbsp;Continue Shopping</Link>
        <Link href="#" className="btn btn-primary pull-right">Check out<span className="glyphicon glyphicon-chevron-right" /></Link>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Shoppingcart
