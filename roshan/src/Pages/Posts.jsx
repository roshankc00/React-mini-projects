import React, { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'

const Posts = (props) => {
        


  return (
    <div>
        <div className="container">
            <div className="row">


        {
            props.post.map((el)=>{
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