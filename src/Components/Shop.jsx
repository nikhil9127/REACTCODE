import React from 'react'
import { useParams } from 'react-router-dom'
import LeftNav from './LeftNav'
import ProductList from "./ProductList"

export default function Shop() {
  var{mc,sc,brand}=useParams()
  return (
    <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                   <LeftNav/>
                </div>
                <div className='col-xxl-10 col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                <h3 className="background text-light  text-center p-3 mt-4"> Shop Section </h3>
                    <ProductList  mc={mc} sc={sc} brand={brand}/>
                    </div>
            </div>
        </div>
    </>
  )
}
