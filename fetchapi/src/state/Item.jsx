import React, { useEffect, useState } from 'react'
import product from './productcontext'
import axios from 'axios'
const Item = (props) => {
  
  const [value, setvalue] = useState([])
  const getdata=()=>{
    const data=axios.get('https://dummyjson.com/products').then((res)=>{
      setvalue(res.data.products)
    })

  }
  return (
    
      
      <>
        <product.Provider value={{value,getdata}}>
      {props.children}
      </product.Provider>
    
      </>
    
  )
}

export default Item