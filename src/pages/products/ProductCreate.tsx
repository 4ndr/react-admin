import { SyntheticEvent, useEffect, useState } from "react"
import Wrapper from "../../components/Wrapper"
import axios from "axios"
import { Permission } from "../../models/permission"
import { Redirect } from "react-router-dom"

const ProductCreate = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState(0)
    const [redirect, setRedirect] = useState(false)

    // useEffect(() => {
    //     (
    //         async () => {
    //             const {data} = await axios.get('permissions')
    //             setPermissions(data)
    //         }
    //     )()
    // }, [])

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()

        await axios.post('products', {
            title,
            description,
            image,
            price
        })

        setRedirect(true)
    }

    if (redirect){
        return <Redirect to="/products"/>
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label>Title</label>
                    <input className="form-control" onChange={e => setTitle(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label>Description</label>
                    <textarea className="form-control" onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <div className="mb-3">
                    <label>Image</label>
                    <div className="input-group">
                        <input className="form-control" onChange={e => setImage(e.target.value)}></input>
                        <label className="btn btn-primary">Upload<input type="file" hidden/></label>
                    </div>
                </div>
                <div className="mb-3">
                    <label>Price</label>
                    <input type="number" className="form-control" onChange={e => setPrice(parseInt(e.target.value))}></input>
                </div>

                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    )
}

export default ProductCreate
