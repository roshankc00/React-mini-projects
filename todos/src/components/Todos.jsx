import React, { useState } from 'react'
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import DoneIcon from '@mui/icons-material/Done';
import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@mui/material';
const Todos = () => {
    let [todo, settodo] = useState("")
    let [arr, setarr] = useState([])
    let [complete, setcomplete] = useState(false)
    let submitHandler=(e)=>{
        e.preventDefault()
        console.log("thanks");
        let item=todo
        setarr([...arr,item])
        
    }
    const changeHandler=(e)=>{
        settodo(e.target.value)
    }
    const handleComplete=()=>{
      setcomplete(!complete)
      console.log(complete);
    }
  return (
           <div className="container mt-4">
      <h1 className="text-center my-5">Your Todos </h1>
      <div className="row">

    <div className='col-8'> 
      <input type="text" className='form-control p-3 fs-4' value={todo} onChange={changeHandler}  />
    </div>
    <div className="buttons col-3">
      <button className="btn btn-danger mt-2 w-50 fs-20 py-2" onClick={submitHandler}> submit </button>
    </div>
      </div>
      <div className="todos-list m-5">
      <ul className="list-group">
        {arr && arr.map((el)=>{
            return(

                <li key={el} className="list-group-item mt-2 d-flex justify-content-between">
    <div>
    <Button className='border-none' onClick={handleComplete}>
  <DoneIcon className='mx-2'/>
    </Button>
  <span className={`ms-2 ${complete?"text-decoration-line-through":""}`}> {el} </span>
    </div>
  <div>
    <Button className='border-none'>
    <CreateIcon className='ms-3'/>
    </Button>
    <Button className='border-none'>
  <AutoDeleteIcon className='ms-3'/>
    </Button>
  </div>
    </li>
      )
    })
      }
</ul>

       

      </div>
    </div>
  )
}

export default Todos