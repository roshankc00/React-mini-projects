import React, { useContext, useEffect } from 'react'
import product from '../state/productcontext'
import Card  from './Card'

const Product = () => {
    const {value,getdata}=useContext(product)
    useEffect(()=>getdata(),[])
  return (
    <>
   <div className=' ms-5 ps-5'>
    <div className="row ms-5 ps-5">

    {
        value.map((el)=>{
            console.log(el);
            return <>
            <Card key={el.id} product={el}/>
            
            </>
        })
    }
    </div>
   </div>
    </>
  )
}

export default Product