import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    const Token=useSelector(state=>state)

    console.log(Token.auth)
    return(
        Token.auth ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes