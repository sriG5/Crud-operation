import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
  import { Link } from 'react-router-dom'

const Users = () => {
  let[data,setData]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/content")
    .then((responce)=>{
      setData(responce.data)
    })
    .catch(()=>{
      console.log("DIDNT GET THE DATA")
    })
  },[])

  let deleteData=(id)=>{
  axios.delete(`http://localhost:3000/content/${id}`)
  window.location.reload("/")
  }
  
  return (
    <div id={style.myUsers}>
      {data.map((x)=>{
        return(
          <div id={style.cards}>
        
            <table>
              <tr>
                <th colSpan="2"><h4>Employe Id:{x.id}</h4></th>
              </tr>
              <tr>
                <td>Name</td>
                <td>:{x.name}</td>
              </tr>
              <tr>
                <td>Salary</td>
                <td>:{x.salary}</td>
              </tr>
              <tr>
                <td>Company</td>
                <td>:{x.company}</td>
              </tr>
              <tr>
                <td><button><Link to={`/edit/${x.id}`}>Edit</Link> </button></td>
                <td><button  onClick={()=>{deleteData(x.id)}}>Delete</button></td>
              </tr>
            </table>
          </div>
        )
      })}
    </div>
  )
}
export default Users
