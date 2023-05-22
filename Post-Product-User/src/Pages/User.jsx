import { useEffect } from "react";
import UserCard from "../components/UserCard";

const User = (props) => {

  return (
    <>
    <div className="container">
    <h1 className="text-center my-5"> User infomation</h1>
    <div className="row">

    {
      props.user.map((el)=>{
        return (
          <UserCard key={el.id} user={el}/>
          )
        })
      }
      </div>
      </div>
    
    </>
  )
}

export default User