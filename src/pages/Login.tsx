import axios from "axios"
import React, { Component, SyntheticEvent, useState } from "react"
import { Redirect } from "react-router-dom"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassoword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()

        const {data} = await axios.post("login", {
            email,
            password
        })

        setRedirect(true)
    }

    if (redirect){
        return <Redirect to={'/'}/>
    }

    return (

        <main className="form-signin">
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please Sign In</h1>
                <input type="email" className="form-control" placeholder="Email" required onChange={e => setEmail(e.target.value)} />

                <input type="password" className="form-control" placeholder="Password" required onChange={e => setPassoword(e.target.value)} />

                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
        </main>
    )
}

export default Login