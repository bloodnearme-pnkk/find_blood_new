import React from "react"
import "./registerdata.css"
import {useState,useEffect} from 'react';


const Registerdata = () => {

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [bloodgroup,setBloodgroup] = useState('');
    
    const handleSubmit = (event)=>{

        event.preventDefault();
        fetch('http://localhost:3001/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email:email,username,password,bloodgroup })
          })
            .then(response => response.json())
            .then(data => {
              console.log(data);
            //   if(data.success == 0)
            //   {
            //       document.getElementById("msg").innerHTML = data.msg;
            //   }else{
            //      document.getElementById("msg").innerHTML = "User Created Succesfully";
            //      //clear inputs 
                 
            //   }
            if(data.success == 0)
            {
                document.getElementById("msg").innerHTML = "Invalid Credentials";
            }else{
                localStorage.setItem('token', data.token);
                window.location.href = "/login";
                console.log(data);
            }
            })
            .catch(error => console.log(error));
            
  

    }; 
    return (
        <form onSubmit={handleSubmit}>
          
        <div className="register">
        <div className="p-3"><h2>Sign Up</h2></div><br></br>
            
            <input type="text" name="name"  placeholder="Your Name" onChange={(e)=>setUsername(e.target.value)}></input>
            <input type="text" style={{marginLeft:'50px'}} name="email"   placeholder="Your Email" onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="password" name="password"  placeholder="Your Password"onChange={(e)=>setPassword(e.target.value)}></input>
            <input type="password" style={{marginLeft:'50px'}} name="password"  placeholder="Confirm Password"onChange={(e)=>setPassword(e.target.value)}></input>
        
            {/* <label for="bloodGroup" style={{marginLeft:'-18.5rem'}}>Your Blood Group: </label> */}
            <select id="bloodGroup" style={{marginLeft:'50px'}} name="bloodGroup"  onChange={(e)=>setBloodgroup(e.target.value)}>
                <option value="">--Please Select Your Blood Group--</option>
                <option value="Apo">A+</option>
                <option value="Ane">A-</option>
                <option value="Bpo">B+</option>
                <option value="Bne">B-</option>
                <option value="Opo">O+</option>
                <option value="One">O-</option>
                <option value="ABpo">AB+</option>
                <option value="ABne">AB-</option>
            </select><br/>

            
                             
           <br></br> <button className="button">Sign Up</button><br></br><br></br>
           {/* <button className="button">Register</button> */}
            
        </div>
        </form>
    )
}

export default Registerdata