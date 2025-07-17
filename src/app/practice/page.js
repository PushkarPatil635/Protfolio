"use client";
import { useState, useEffect } from "react"
import React from 'react'
import data from "../../../public/data.json"
 
 function page() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => console.erro("Fetching Error", err) )
        // setUser(data)
    },[]);


   return (
     <div>
       <h2>List of Users</h2>
       <ul>
        {user.map((user) => (
            <div>
            <li key={user.id}>
                <strong>{user.name}</strong> - {user.email}
                <p>{user.address}</p>
            </li>
            </div>
        ))}
       </ul>
     </div>
   )
 }  
 
 export default page
 