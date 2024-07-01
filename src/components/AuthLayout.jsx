import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router"

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate();
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)


    useEffect(() => {
        // make is more easy 
        
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        } else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }

        setLoader(false)

    }, [authStatus])
    return loader ? <h1>Loading...</h1> : <>{children}</>
}
