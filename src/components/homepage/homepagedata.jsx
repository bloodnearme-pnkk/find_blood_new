import React from 'react';
import "./homepagedata.css";

const Homepagedata = () => {
    return (
        <>
            <div className="index">

                <div className="row-1">

                    <div className="column-1" style={{marginLeft:'6rem'}}>
                        <h2 style={{color: 'lightgray'}}>The blood you donate gives someone<br></br>
                            another chance at life
                        </h2>
                        <br></br><br></br>
                   <h1 style={{color: 'lightgray'}}> GIVE THE GIFT OF LIFE</h1>
                   <h1 style={{fontSize:'60px'}}>DONATE BLOOD</h1>
                    </div>
                    <div className="row-1">
                    <div className="logo-1">
                    <img src="./bg2.png" style={{height:'17.5rem'}} alt=" " />

                    </div>
                   </div>
                   </div>
                   <div className='row-1'> 
                   <img src="./blood group.png" className="grp" style={{marginTop:'30px'}} alt=" " />
                   <button className="button"><h4>1050</h4><h5>No. of Donors</h5></button> 
                   <button className="button"><h4>500</h4><h5>No. of Request</h5></button> 

                   </div>
                   

        <br></br>

            </div>
        </>
    )
}

export default Homepagedata
