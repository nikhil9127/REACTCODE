import React from 'react'
import { Link } from 'react-router-dom'
import "./mystyle.css"
export default function ProductItem(props) {
    return (
        <>
            <div className=' col-xxl-2 col-lg-3 col-xl-2 col-md-4 col-sm-6 col-12'>
                <div className="card">
                    <img src={props.pic} height="200px" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{height:"100px"}}>{props.name}</h5>
                        <p className="card-text">RS<strike>{props.baseprice}</strike> {props.finalprice}</p>
                        <Link to={"/product/"+props.id} className="btn btn-primary background text-light">Add To Cart</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
