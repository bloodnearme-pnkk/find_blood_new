import React, { useState } from "react"
import Navigation from "../homepage/Navigation"
import BloodBankdata from "./bloodbankdata"
import Footer from "../homepage/Footer"

const BloodBank = () => {
    return (
     <>
     <Navigation/>
     <BloodBankdata/>
     <Footer/>
     </>
    )
}

export default BloodBank