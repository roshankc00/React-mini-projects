import React, { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'

const Posts = (props) => {
        


  return (
    <div>
        <div className="container">
    <h1 className="text-center my-5">Users Posts</h1>

            <div className="row">


        {
            props.post.map((el)=>{
              console.log(el);
                return (
                    <PostCard key={el.id} post={el}/>
                    )
                })
            }
            </div>
      
            </div>
    </div>
  )
}

export default Posts