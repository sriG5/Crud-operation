import React, { useState } from 'react'
import style from './home.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Createusers = () => {
  let[name,setName]=useState("")
  let[salary,setSalary]=useState("")
  let[company,setCompany]=useState("")

  let navigate=useNavigate()
  
  let nameData=(e)=>{
    setName(e.target.value)
  }
  let salaryData=(e)=>{
    setSalary(e.target.value)
  }
  let companyData=(e)=>{
    setCompany(e.target.value)
  }
  let formHandle=(e)=>{
    e.preventDefault()
    let payload={name,salary,company}
    axios.post("http://localhost:3000/content",payload)
    .then(()=>{
      console.log("Data has been added")
    })
    .catch(()=>{
      console.log("something is wrong")
    })
    navigate("/")
  }
   
  return (
    <div id={style.myForm}>
          <table>
            <tr>
              <th colSpan="2"><h4>User Details</h4></th>
            </tr>
            <tr>
                <tb> <lable>Name</lable></tb>
                <tb> : <input type="text" value={name} onChange={nameData}/></tb>
            </tr>
            <tr>
            <tb> <lable>Salary</lable></tb>
                <tb> : <input type="text" value={salary} onChange={salaryData}/></tb>  
                
            </tr>
            <tr>
            <tb> <lable>Company</lable></tb>
                <tb> : <input type="text" value={company} onChange={companyData}/></tb>
            </tr>
            <tr>
                <th colSpan="2"><button onClick={formHandle}>Submit</button></th>
            </tr>
            
            </table>     
    </div>
  )
}
export default Createusers 
