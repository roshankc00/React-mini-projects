import { useEffect } from "react";
import UserCard from "../components/UserCard";

const User = (props) => {

  return (
    <>
    <div className="container">
    <h1 className="text-center my-5"> User infomation</h1>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>FirstName</td>
      <td>LastName</td>
      <td>maindenName</td>
    </tr>
    
  
    {
      props.user.map((el,index)=>{
        return (
          <tr key={el.id} className="p-4">
          <th scope="row">{index+1}</th>
          <td>{el.firstName}</td>
          <td>{el.lastName}</td>
          <td>{el.maidenName}</td>
        </tr>
          )
        })
      }
      </tbody>
</table>
      </div>
    
    </>
  )
}

export default User