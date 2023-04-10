import React, { useState } from "react"
import "./bloodbankdata.css"

const BloodBankdata = () => {

    const [ user, setUser] = useState({
        name: "",
        city:"",

    })

    const handleChange = e => {
        const { city, value } = e.target
        setUser({
            ...user,
            [city]: value
        })
    }

    return (
        
        <div className="bloodbank">
        {console.log("User", user)}
        <div className="p"><h2>Search Blood Bank</h2></div><br></br>
        <div className="xyz"> 

            <input type="text" name="city" value={user.city} placeholder="City" onChange={ handleChange }></input>
            <input type="text" style={{marginLeft:'50px'}} name="bname" value={user.bname} placeholder="Bank Name" onChange={ handleChange }></input><br></br><br></br>
            <div className="button">Search</div>
            </div><br></br>

            <div className="xyz-1">

            <table>
              <thead>
                <tr>            
                  <th>No.</th>
                  <th>District</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Contact No.</th>
                </tr>
              </thead>
              
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ahmedabad</td>
                  <td>Dept. of IHBT, Civil Hospital, Ahmedabad</td>
                  <td>Blood Bank, Department of IHBT, C/o.The Civil Hospital, Asarwa, Ahmedabad- 380016</td>
                  <td>079-22683949-55</td>
                  </tr>
                  <tr> 
                    <td>2</td>
                    <td>Rajkot</td>
                    <td>PDU Hospital and Medical College, Rajkot</td>
                    <td>Blood Bank, P.D.U. Hospital & Medical College, Room No. 6, Ground Floor, New OPD Building, PDU Hospital and MedicalCollege, Jamnagar road, Rajkot-360001</td>
                    <td>0281-2450385</td>
                  </tr>
              </tbody>
            </table> 
      
            <br></br>
          </div>
        </div>
    )
}

export default BloodBankdata