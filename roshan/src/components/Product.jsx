import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';
const Product = () => {
    const [data, setdata] = useState([]);
    useEffect (() => {
      const fetchData = async () => {
        const product = await axios.get("http://dummyjson.com/products");
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







