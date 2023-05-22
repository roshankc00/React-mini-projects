import { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Product from '../Pages/Product';
import { getData } from '../services/axios.services';
import User from '../Pages/User';
import Posts from '../Pages/Posts';

// import Sonnet from '../../components/Sonnet'; 

function UncontrolledExample() {
    const [key, setkey] = useState("products")
    const [post, setpost] = useState([])
    const [user, setuser] = useState([])
    const [product, setproduct] = useState([])
   useEffect(()=>{
     getData(key).then((res)=>{
         if(key==="users"){
             let data=res.data.users
             setuser(data)
             console.log(data);
            }
            if(key==="products"){
                let data=res.data.products
                setproduct(data)
                console.log(data);
            }
            if(key==="posts"){
                let data=res.data.posts
                setpost(data)
                console.log(data);
            }
        })
    },[key])
    
    return (
    <Tabs
      defaultActiveKey="profile"
      activeKey={key}
      onSelect={(k)=>setkey(k)}
      id="uncontrolled-tab-example"
      className="mb-3 "
    >
        {product&&

            <Tab eventKey="products" className='fs-6 p-5' title="Products">
        <Product product={product}/>
      </Tab>
    }
      {user&&

          <Tab eventKey="users" title="Users">
        <User user={user}/>
 
      </Tab>
    }
      { post&&

          <Tab eventKey="posts" title="Posts">
        <Posts post={post}/>
      </Tab>
    }
    </Tabs>
  ); 
}

export default UncontrolledExample;