import React, { useState } from 'react'
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import DoneIcon from '@mui/icons-material/Done';
import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@mui/material';
import Modal from 'react-bootstrap/Modal';
const Todos = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        let index=localStorage.getItem("index")
        console.log(index)
        let newArr=[]
        arr.map((el,ind)=>{
            // console.log(update)
            // console.log(el)
            if (index==ind){
                console.log("nepal")
                newArr.push(update) 
            }
            else{
                newArr.push(el)
            }
          
        })
        setarr(newArr)
    }
    let [todo, settodo] = useState("")
    let [arr, setarr] = useState([])
    let [complete, setcomplete] = useState(false)
    const [update, setupdate] = useState("")
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
        {arr && arr.map((el,index)=>{
            return(

                <li key={index} className="list-group-item mt-2 d-flex justify-content-between">
    <div>
    <Button className='border-none' onClick={handleComplete}>
  <DoneIcon className='mx-2'/>
    </Button>
  <span className={`ms-2 ${complete?"text-decoration-line-through":""}`}> {el} </span>
    </div>
  <div>
    <Button type='button' className='border-none'>
    <CreateIcon data-bs-toggle="modal" data-bs-target="#exampleModal" className='ms-3' onClick={()=>{
        setShow(true)
        localStorage.setItem("value",el)
        setupdate(localStorage.getItem("value"))
        localStorage.setItem("index",index)
       
    }}/>
    </Button>
    <Button  type='button' className='border-none'>
  <AutoDeleteIcon  className='ms-3' onClick={()=>{
    console.log("delete me ");
    console.log(index);
    let newArr=arr.filter((el,ind)=>{
        return index!=ind
    })
    setarr(newArr)
  }}/>
    </Button>
  </div>
    </li>
      )
    })
      }
</ul>
      </div>
      {/* model */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><input type='text' className='form-control' value={update} onChange={(e)=>{
            setupdate(e.target.value)
        }} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            close
          </Button>
         
        </Modal.Footer>
      </Modal>
      {/* model */}
    </div>
  )
}

export default Todos