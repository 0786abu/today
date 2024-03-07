import {Link} from "react-router-dom"
import { pastriesapi } from "../api/Pastries_ap"

const Pastries = () => {
  return (
    <div>
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
      <form className="d-flex" role="search">
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
          <div className="slide">
          <div className="imggg">
          <div className="content text-white">
            <h2>ONLINE COFFEE SHOP</h2>
             <p>You can use it as an inquiry about getting coffee with someone, or as a suggestion for a beverage for an upcoming event, meeting, or gathering</p>
             <button className="btnn">Booking Now</button>
          </div>
          </div>
          </div>

          {/* ====slide end==== */}

                 <div className="ss">
                  <div className="img11">
                    <img src="../public/image/ss1.jpg" width='100%' alt="" />
                    <div className="content1111">
                      <h4>20% OFF</h4>
                      <p>Beautiful Sweets</p>
                    </div>
                  </div>
                  <div className="img11">
                  <img src="../public/image/ss2.jpg" width='100%' alt="" />
                  <div className="content1111">
                    <h4>20% OFF</h4>
                    <p>Beautiful Sweets</p>
                  </div>
                  </div>
                 </div>

          <div className="sec-2">
          <div className="head"><h2 className="hh text-center my-5">NEW ITEMS</h2></div>
          <div className="items">
            {pastriesapi.map((b)=>{
                return(
                    <div className="item" key={b}>
                    <img src={b.image} alt="" />
                    <div className="content-3">
                    <h2>{b.title}</h2>
                    <p>{b.description.slice(0,60)}...</p>
                    <Link to={`/Pastries/${b.id}`}><button>Add To Cart</button></Link>
                    </div>
                    </div>
                )
            })}
          </div>
          </div>
          <footer className="bg-dark-gradient footer">
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
  )
}

export default Pastries
