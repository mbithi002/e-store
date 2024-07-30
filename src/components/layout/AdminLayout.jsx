import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AdminLayout = ({ children }) => {
    const { status, userData } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        if (!status || !userData.isAdmin) {
            navigate("/")
        }
        setLoader(false)
    }, [status, userData, navigate])

    return loader ? null : <>{children}</>
}

export default AdminLayout
