import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AdminLayout = ({ children, authentication = true }) => {
    const { status, userData } = useSelector((state) => state.auth)
    const adminPhone = 723450978

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        if (authentication && status !== authentication) {
            navigate("/signin")
        } else if (!authentication && status !== authentication && userData.phone === adminPhone) {
            navigate("/")
        }
        setLoader(false)
    }, [status, authentication, navigate])

    return loader ? null : <>{children}</>
}

export default AdminLayout