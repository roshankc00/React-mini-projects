import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { getData } from '../services/axios.services';
import { PRODUCT_URL } from '../constants/api.constant';
const Product = (props) => {
    const [data, setdata] = useState([]);
 

  return (
    <div className='container '>
      
        <div className="row ms-5">

        {
            props.product.map((el)=>{
                return (
                    
                    <ProductCard key={el.id} product={el}/>
                    )
                })
            }
            </div>
    </div>
  )
}

export default Product






