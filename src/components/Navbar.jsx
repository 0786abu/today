import {Link} from "react-router-dom"
import { coffeeapi } from "../api/Coffee_ap"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";
import '../style/form.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";

 
const Navbar = () => {
 
  const [form, setForm] = useState(
    {
      name: "",
      email: "",
      password: ""
    }
  )
  const formhandling = (e)=>{
    e.preventDefault()
    console.log(form)
  }
  const getdata = useSelector((state)=>state.cartReducer.carts)
  return (
    
    <div>
    

        <div className="wrapper-fluid">
          <nav className="navbar navbar-expand-lg  text-center">
            <div className="container-fluid">
              <Link className="navbar-brand text-white border border-white py-1 px-2" to="/">BINZAY</Link>
              <button className="navbar-toggler bg-light  text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-white" />
              </button>
              <div className="collapse navbar-collapse  text-white" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                  <li className="nav-item">
                    <Link className="nav-link active  text-white" aria-current="page" to="/Pastries">Pastries</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active  text-white" aria-current="page" to="/Bakes">Bakes</Link>
                  </li>

                </ul>

                <form className="d-flex m-auto" role="search">
                  <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-success" type="submit">Search</button>
                </form>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                  <li className="nav-item">
                    <Link className="btn bg-white text-white " aria-current="page" to="/Shoppingcart">
                      <Badge badgeContent={getdata.length} color="primary">
                        <ShoppingCartIcon color="action" />
                      </Badge></Link>
                  </li>



                </ul>
              </div>
            </div>
          </nav>
          <div className="slide">
            <div className="imgg">
              <div className="content text-white">
                <h2>ONLINE COFFEE SHOP</h2>
                <p>You can use it as an inquiry about getting coffee with someone, or as a suggestion for a beverage for an upcoming event, meeting, or gathering</p>
                <button className="btnn">Booking Now</button>
              </div>
            </div>
          </div>
          {/* slide end */}

          <div className="sec-1">
            <div className="scol-1">
              <img src="https://img2.goodfon.com/original/1920x1080/b/2e/coffee-restaurant-modern.jpg" width='100%' alt="" />
            </div>
            <div className="scol-2">
              <h2>ABOUT SHOP</h2>
              <p>Pakistan largest local coffee brand with 15 locations <br /> in 4 cities,  in just 5 years! We have a loyalty app, <br /> online store and barista academy too! A coffee <br /> shop is a kind of restaurant that sells coffee,v <br /> tea, cakes, and sometimes sandwiches and light meals.</p>
            </div>
          </div>

          {/* sec-1 end */}

          <div className="sec-2">
            <div className="head"><h2 className="hh text-center my-5">NEW ITEMS</h2></div>
            <div className="items">
              {coffeeapi.map((a) => {
                return (
                  <div className="item" key={a}>
                    <img src={a.image} alt="" />
                    <div className="content-3">
                      <h2>{a.title}</h2>
                      <p>{a.description.slice(0, 60)}...</p>
                      <Link to={`/Navbar/${a.id}`}><button>Add To Cart</button></Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* sec-2 end */}

          <div className="sec-3">
            <div className="immg">
              <div className="content-4">
                <h2>WE SHOP CUSTOMER ALWAYS HAPPY</h2>
                <p>I absolutely love this coffee shop! The baristas are always friendly and make the  best lattes in town. The ambiance is cozy, with comfortable seating and soft  music playing in the background. Plus, they have a great selection of pastries  to pair with your coffee. It the perfect spot to relax or catch up with friends.  Highly recommend!</p>
                <h4 className="revy">PLEASE GIVE A REVIEW</h4>
                <button className="btnn">Subscribe</button>
              </div>

            </div>
          </div>

          {/* sec-3 end */}

          <div className="contact-wrapper">
            <form action="" className="form " onSubmit={formhandling}>
              <div className="section1">
                <img src="../public/image/booking.jpg" alt="" />
              </div>
              <div className="section1">
                <h2>BOOKING TABLE</h2>
                <div className="style">
                  <input type="text" name="name" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  <div className="icon"><PersonOutlineIcon /></div>
                </div>
                <div className="style">
                  <input type="email" name="email" placeholder="abcd@gmail.com" onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  <div className="icon"><AlternateEmailIcon /></div>
                </div>
                <div className="style">
                  <input type="password" name="password" placeholder="Enter password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
                  <div className="icon"><VisibilityIcon /></div>
                </div>
                <div className="BUTTTTTT">
                  <button className="bbttnn shadow shadow-4" type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>

          {/* oun end */}

          <footer className="bg-dark-gradient footer mt-5">
            <div className="footer-top">
              <div className="container">
                <div className="footer-border-bottom pb-6 mb-5">
                  <div className="row">
                    <div className="col-lg-4 col-xl-3">
                      <h4 className="text-white">
                        Sign up to Get Latest Updates
                      </h4>
                    </div>
                    <div className="col-lg-4 col-xl-6">
                      <form className="d-flex flex-row mb-2 p-1 bg-white input-group">
                        <input type="email" className="form-control rounded-0 border-0" placeholder="you@yoursite.com" />
                        <button className="btn btn-secondary rounded-0 flex-shrink-0" type="submit">Subscribe</button>
                      </form>
                    </div>
                    <div className="col-lg-4 col-xl-3">
                      <div className="text-lg-end text-white">
                        <span className="h6">Call Us On</span><br />
                        <span className="h3">1-800-222-000</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-lg-3 my-4">
                    <div className="mb-4">

                    </div>
                    <div className="text-white-65 mb-4 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
                    <div className="nav footer-socila-icon">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-2 my-4">
                    <h5 className="text-white h6 mb-4">Customer</h5>
                    <ul className="list-unstyled white-link footer-links">
                      <li>
                        <a href="#">Get Corpo</a>
                      </li>
                      <li>
                        <a href="#">Documentation</a>
                      </li>
                      <li>
                        <a href="#">Help center</a>
                      </li>
                      <li>
                        <a href="#">Pricing</a>
                      </li>
                      <li>
                        <a href="#">Contact us</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-lg-2 my-4">
                    <h5 className="text-white h6 mb-4">Product</h5>
                    <ul className="list-unstyled white-link footer-links">
                      <li>
                        <a href="#">Portfolio</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Join our team</a>
                      </li>
                      <li>
                        <a href="#">Elements</a>
                      </li>
                      <li>
                        <a href="#">Products</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-lg-2 my-4">
                    <h5 className="text-white h6 mb-4">Company</h5>
                    <ul className="list-unstyled white-link footer-links">
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                      <li>
                        <a href="#">Legal &amp; Security</a>
                      </li>
                      <li>
                        <a href="#">Terms of use</a>
                      </li>
                      <li>
                        <a href="#">We are hiring!</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-lg-3 my-4">
                    <h5 className="text-white h6 mb-4">Company</h5>
                    <div className="white-link">
                      <div className="d-flex pb-3">
                        <div className="avatar avatar-lg rounded">
                          <img src="https://avatars.mds.yandex.net/i?id=6da2b06bb4cb4933fef81c37e25d092585edcac9-7764851-images-thumbs&n=13" title alt />
                        </div>
                        <div className="col ps-3">
                          <small className="text-white-65">29 March 2021</small>
                          <h6 className="font-w-500 h6 m-0"><a className="text-white" href="#">Markdown Language Sample Blog Post Styling</a></h6>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="avatar avatar-lg rounded">
                          <img src="https://avatars.mds.yandex.net/i?id=f376bf2e7b8f512df067561fd29fa6facc449cad-10733191-images-thumbs&n=13" title alt />
                        </div>
                        <div className="col ps-3">
                          <small className="text-white-65">29 March 2021</small>
                          <h6 className="font-w-500 h6 m-0"><a className="text-white" href="#">Markdown Language Sample Blog Post Styling</a></h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom footer-border-top light py-3">
              <div className="container text-center">
                <p className="m-0 text-white">© 2021 copyright <a href="#" className="text-reset text-white">Bootdey.com</a></p>
              </div>
            </div>
          </footer>


        </div>
        
      </div>
  )
}

export default Navbar
