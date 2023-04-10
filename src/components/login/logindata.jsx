import React, {useState} from "react"
import axios from "axios";
import "./logindata.css"


const Logindata = () => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState("");
  
    const handleChange = e => {
        var test=1
    }

    function handleLogin(){
        console.log('Username:', username);
        console.log('Password:', password);
        
        fetch('http://localhost:3001/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email:username, password })
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            if(data.success == 0)
            {
                document.getElementById("msg").innerHTML = "Invalid Credentials";
            }else{
                localStorage.setItem('token', data.token);
                window.location.href = "/";
                console.log(data);
            }
          })
          .catch(error => console.log(error));
    
  
    }


    return (
        
                <div className="login">
                     <h2 id="msg"></h2>
        <div className="p-4"><h2>Sign In</h2></div><br></br>
            <input type="text" name="email"   onChange={(e)=>setUsername(e.target.value)}placeholder="Enter your Email"></input>
            <input type="password" style={{marginLeft:'50px'}} name="password"  onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your Password" ></input><br></br><br></br>
            {/* <a href="./" className="button">Sign In</a><br></br><br></br> */}
            <button className="button" onClick={handleLogin}>Sign In</button><br></br><br></br>

            <div>or</div>
            <h3>If you don't have any account? <a href="./Register" style={{color:'red'}}>Sign Up</a></h3>
      
       
        </div>
        

    )

}

export default Logindata