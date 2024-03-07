import { useState } from "react"
import { Link } from "react-router-dom"


// eslint-disable-next-line react/prop-types
const Login = ({setAuth}) => {
    const [form, setForm] = useState(
        {
            email: '',
            password: ''
        }
    )
    const formhandler = (e)=>{
        e.preventDefault()
        console.log(form)
    }
  return (
    <div className="login pt-5">
      <main className="FORM form-signin w-25 border border-dark  p-4 m-auto">
  <form className="text-center" onSubmit={formhandler}>
    <img src="https://content.enkronos.com/wp-content/uploads/2021/09/e-commerce-local-trade.jpg" className="my-2 rounded-circle ms-auto" alt="" style={{width: "100px", height: "100px"}} />
    <h1 className="h3 mb-3 fw-normal my-2">Please sign in</h1>
    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" name="email" onChange={(e)=>setForm({...form, email:e.target.value})} placeholder="name@example.com" />
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating mt-4">
      <input type="password" className="form-control" id="floatingPassword" name="password" onChange={(e)=>setForm({...form, password:e.target.value})} placeholder="Password" />
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <div className="form-check text-start  my-3">
      <input className="form-check-input" type="checkbox" defaultValue="remember-me" id="flexCheckDefault" />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Remember me
      </label>
    </div>
    <Link to="/"><button className="btn btn-primary w-100 py-2 mt-5" type="submit" onClick={()=>setAuth(true)}>Sign in</button></Link>
    <p className="mt-5 mb-3 text-white">© 2017-2024</p>
  </form>
</main>

    </div>
  )
}

export default Login
