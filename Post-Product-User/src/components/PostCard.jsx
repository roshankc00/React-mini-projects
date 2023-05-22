import React from 'react'

const PostCard = (props) => {
  return (
    <div className='col-4'>
        <div className="card " >
  <div className="card-body">
    <h5 className="card-title">{props.post.title}</h5>
  
    <p className="card-text">{props.post.body.slice(0,100)}...</p>
  
  </div>
</div>
    </div>
  )
}

export default PostCard