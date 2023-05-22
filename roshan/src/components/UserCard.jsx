import React from 'react'

const UserCard = () => {
  return (
    <div className='col-4'>
        <div className="card " >
  <div className="card-body">
    <h1 className="card-title">Name:{props.user.firstName} {props.user.lastName}</h1>
  
    <h5 className="card-text">Age:{props.user.age}</h5>
  
  </div>
</div>
    </div>
  )
}

export default UserCard