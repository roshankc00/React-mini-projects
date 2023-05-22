import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { getData } from '../services/axios.services';
import { PRODUCT_URL } from '../constants/api.constant';
const Product = () => {
    const [data, setdata] = useState([]);
    useEffect (() => {
      const fetchData = async () => {
        const product = await getData(PRODUCT_URL)
        const pro=product.data.products
        setdata(pro)
      };
      fetchData();
    }, []);
  return (
    <div className='container '>
        <div className="row ms-5">

        {
            data.map((el)=>{
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







