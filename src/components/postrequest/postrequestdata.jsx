import React from "react"
import {useState,useEffect} from 'react';
import "./postrequestdata.css"

const Postrequestdata = () => {

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [dob,setDOB] = useState('');
    const [address,setAddress] = useState('');
    const [gender,setGender] = useState('');
    const [contact,setContact] = useState('');
    const [bloodgroup,setBloodgroup] = useState('');
    const [unit,setUnit] = useState('');


    const handlePost = (event)=>{

        // event.preventDefault();
        // fetch('http://localhost:3001/api/postrequest', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email:email,username,dob,address,gender,contact,bloodgroup,unit })
        //   })
        //     .then(response => response.json())
        //     .then(data => {
        //       console.log(data);
        //     //   if(data.success == 0)
        //     //   {
        //     //       document.getElementById("msg").innerHTML = data.msg;
        //     //   }else{
        //     //      document.getElementById("msg").innerHTML = "User Created Succesfully";
        //     //      //clear inputs 
                 
        //     //   }
        //     if(data.success == 0)
        //     {
        //         document.getElementById("msg").innerHTML = "Invalid Credentials";
        //     }else{
        //         localStorage.setItem('token', data.token);
        //         window.location.href = "/";
        //         console.log(data);
        //     }
        //     })
        //     .catch(error => console.log(error));
            
  

        };

    return (
        <form onSubmit={handlePost}> 

        <div className="postrequest">
        <div className="p-1"><h2>Post Request</h2></div><br></br>
            
            <input type="text" name="name"  placeholder="Your Name" onChange={(e)=>setUsername(e.target.value)}></input>
            <input type="text" style={{marginLeft:'50px'}} name="email"  placeholder="Your Email" onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="text" name="dob"  placeholder="Your Date of Birth" onChange={(e)=>setDOB(e.target.value)}></input>
            <input type="text" style={{marginLeft:'50px'}} name="Address"  placeholder="Your Address" onChange={(e)=>setAddress(e.target.value)}></input>
            <input type="text" name="Gender" placeholder="Your Gender" onChange={(e)=>setGender(e.target.value)}></input>
            <input type="text" style={{marginLeft:'50px'}} name="contact" placeholder="Your Contact No" onChange={(e)=>setContact(e.target.value)}></input>
            <select id="bloodGroup" name="bloodGroup"  onChange={(e)=>setBloodgroup(e.target.value)}>
                <option value="">--Please Select Your Blood Group--</option>
                <option value="Apo">A+</option>
                <option value="Ane">A-</option>
                <option value="Bpo">B+</option>
                <option value="Bne">B-</option>
                <option value="Opo">O+</option>
                <option value="One">O-</option>
                <option value="ABpo">AB+</option>
                <option value="ABne">AB-</option>
            </select>
            <input type="text" style={{marginLeft:'50px'}} name="unit" placeholder="Required Unit" onChange={(e)=>setUnit(e.target.value)}></input><br></br>


           <br></br> <div className="button">Post Request</div>
            
        </div>
        </form>

    )
}

export default Postrequestdata