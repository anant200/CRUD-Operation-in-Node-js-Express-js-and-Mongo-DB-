import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
// import User from '../../backend/model/model';


const Display = () => {
  const [myuser, setUsers] = useState([])

  // useEffect(() => {
    
  // }, [])

  axios.get("http://localhost:8000/myuser")

      .then(myuser => setUsers(myuser.data))
      .catch(err => console.log(err))
return ( 


    myuser.map(e => {
    return (
      <ol>
        <li>{e.names}</li>
        <li>{e.emails}</li>
        <li>{e.age}</li>

      </ol>)
  })


);

}




export default Display;
