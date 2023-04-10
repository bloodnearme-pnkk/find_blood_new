import React, { useState } from "react"
import { render } from "react-dom"
import "./notificationdata.css"

const NotificationData = () => {

    return (
<> <div>
        <div className="abc"> 
          <div className="row-2">           
           <img src="./bld.png" style={{height:'130px'}} alt=" " />
            <span style={{verticalAlign:'middle'}}>Neha Patel<br></br>16/05/2022<br></br>Rajkot</span>
      </div>
            <button className="btn" style={{backgroundColor:'green'}}>Accept</button>
            <button className="button">Reject</button><br></br>
        </div>
       
        <div className="abc-1"> 
          <div className="row-2">           
           <img src="./bld.png" style={{height:'130px'}} alt=" " />
            <span style={{verticalAlign:'middle'}}>Neha Patel<br></br>16/05/2022<br></br>Rajkot</span>
      </div>
            <button className="btn" style={{backgroundColor:'green'}}>Accept</button>
            <button className="button">Reject</button><br></br>
        </div> </div>
         <img src="./bld.png" className="logo-2" alt=" " />
      
        </>
        
    )
}

export default NotificationData