import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { User } from "../models/user"

const Nav = () => {

    const [user, setUser] = useState(new User())

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get("user")
                
                setUser(new User(
                    data.id,
                    data.first_name,
                    data.last_name,
                    data.email,
                    data.role
                ))
            }
        )()
    }, [])

    const logout = async () => {
        await axios.post('logout')
    }

    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">Company name</a>

            <ul className="my-2 my-md-- mr-md-3">
                <Link to="/profile" className="p-2 text-white text-decoration-none" href="#">{user.name}</Link>
                <Link to="/login" className="p-2 text-white text-decoration-none" href="#" onClick={logout}>Sign out</Link>
            </ul>
        </nav>
    )
}

export default Nav