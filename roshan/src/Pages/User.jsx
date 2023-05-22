import { useEffect } from "react";

const User = (props) => {
  useEffect(()=>{

    console.log(props.user);
  })
  return (
    <div className='container'>User</div>
  )
}

export default User