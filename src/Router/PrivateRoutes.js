import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    // const Token=useSelector(state=>state)
    const Auth=sessionStorage.getItem('auth')
    console.log(Auth)

    // console.log(Token.auth)
    return(
       Auth ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes