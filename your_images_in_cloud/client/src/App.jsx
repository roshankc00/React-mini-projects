import React, { useEffect, useState } from "react";
import axios from 'axios'
const App = () => {
  const [user, setuser] = useState([])
  const [tried, settried] = useState([])
  const [inputs, setinputs] = useState({
    name:"",
    email:"",
    age:""
  })
const onChangeHandler=(e)=>{
  setinputs({...inputs,[e.target.name]:e.target.value})
}
const [profile, setprofile] = useState()
  useEffect(()=>{
    const getAllUser=async()=>{
      const getAllData=await axios.get('http://localhost:9000/api/v1/user');
      setuser(getAllData.data);
      console.log(getAllData.data);
    }
    getAllUser()
    console.log(user);

  },[tried])
  const formdata=new FormData();
  formdata.append('name',inputs.name)
  formdata.append('email',inputs.email)
  formdata.append('age',inputs.age)
  formdata.append('profile',profile)

const handleSubmit=async(e)=>{
    e.preventDefault()
  try {
    constsubmittedData=await axios.post('http://localhost:9000/api/v1/user',formdata)
    console.log(inputs);
    console.log(profile.name);
    
  } catch (error) {
    console.log(error);
    
  }
  settried()

}


  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center text-danger">File uploader </h1>
        </div>

        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Name
              </label>
              <input
                type="text"
                value={inputs.name}
                onChange={onChangeHandler}
                name="name"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                value={inputs.email}
                onChange={onChangeHandler}
                
                name="email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                age
              </label>
              <input
                type="number"
                className="form-control"
                value={inputs.age}
                onChange={onChangeHandler}

                id="exampleInputPassword1"
                name="age"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Profile

              </label>
              <input
                type="file"
                name="profile"
                onChange={(e)=>setprofile(e.target.files[0])}
                encTypes='multipart/form-data'
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>





        <div className="col-6">



        <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">email</th>
      <th scope="col">age</th>
      <th scope="col">Profile</th>
    </tr>
  </thead>
  <tbody>
    {user&& user.map((user)=>{
      return (

        <tr>
       <td>{user.name}</td>
       <td>{user.email}</td>
       <td>{user.age}</td>
       <td><img className="img-fluid" src={user.profile} alt="loading"/></td>
     </tr>
         )

    })}
   
  </tbody>
</table>
        </div>
      </div>
    </div>
  );
};

export default App;
