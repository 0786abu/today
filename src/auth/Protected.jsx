import { Navigate, Outlet } from "react-router-dom"


// eslint-disable-next-line react/prop-types
const Protected = ({auth}) => {
  return (
    auth ? <Outlet/> : <Navigate to='/Login'/>
  )
}

export default Protected
