import { SyntheticEvent, useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper"
import axios from "axios";
import { Role } from "../../models/role";
import { Redirect } from "react-router-dom";

const UserCreate = () => {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [role_id, setRoleId] = useState(0)
    const [roles, setRoles] = useState([])
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get('roles')

                setRoles(data)
            }
        )()
    }, [])

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()

        await axios.post('users', {
            first_name,
            last_name,
            email,
            role_id,
        })

        setRedirect(true)
    }

    if (redirect){
        return <Redirect to="/users"/>
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label>First Name</label>
                    <input className="form-control" onChange={e => setFirstName(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label>Last Name</label>
                    <input className="form-control" onChange={e => setLastName(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input className="form-control" onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label>Role</label>
                    <select className="form-control" onChange={e => setRoleId(parseInt(e.target.value))}>
                        {roles.map((r: Role) => {
                            return (
                                <option key={r.id} value={r.id}>{r.name}</option>
                            )
                        })}
                    </select>
                </div>

                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    )
}

export default UserCreate;
