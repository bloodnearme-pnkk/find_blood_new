import React, { useState } from "react"
import "./donateblooddata.css"

const DonateBlooddata = () => {

    const [ user, setUser] = useState({
        name: "",
        email:"",
        
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        
        <div className="donateblood">
            <br></br>
            {console.log("User", user)}
        <div className="p-2"><h2>Donate Blood</h2></div><br></br>
        <div className="pqr"> 

            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" style={{marginLeft:'50px'}} name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="text" name="DOB" value={user.DOB} placeholder="Your Date of Birth" onChange={ handleChange }></input>
            <input type="text" style={{marginLeft:'50px'}} name="Address" value={user.Address} placeholder="Your Address" onChange={ handleChange }></input>
            <input type="text" name="Gender" value={user.Gender} placeholder="Your Gender" onChange={ handleChange }></input>
            <input type="text" style={{marginLeft:'50px'}} name="contact" value={user.contact} placeholder="Your Contact No" onChange={ handleChange }></input>
            <input type="text" name="blood_group" value={user.blood_group} placeholder="Your Blood Group" onChange={ handleChange }></input>
            <input type="text" style={{marginLeft:'50px'}} name="unit" value={user.unit} placeholder="Blood Unit" onChange={ handleChange }></input><br></br>
            </div><br></br>

            <div className="pqr-1">
                <label htmlFor="name" style={{color: '#ff0123',fontSize: '1.3rem'}}> Health Security Check</label><br></br><br></br>
                <label htmlFor="des"> Do you suffer of any diseases?</label>
                <div>
                    <input type="radio" value="Yes" name="gender" /> Yes<br></br>
                    <input type="radio" value="No" name="gender" /> No
                </div><br></br>
                <label htmlFor="des"> Do you have allergies?</label>
                 <div>
                    <input type="radio" value="Yes" name="gender" /> Yes<br></br>
                    <input type="radio" value="No" name="gender" /> No
                </div><br></br>
                <label htmlFor="des"> Allergies Description?</label><br></br>
                <input id="des" type="text"></input><br></br><br></br>
                <label htmlFor="des"> Do you take medication?</label><br></br>
                <div>
                    <input type="radio" value="Yes" name="gender" /> Yes<br></br>
                    <input type="radio" value="No" name="gender" /> No
                </div>
                <div className="button">Submit</div> <br></br>
            </div>


        </div>
    )
}

export default DonateBlooddata