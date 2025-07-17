import React from "react"

export const FooterBar = () => {
    return (
        <div style={{display:"inline-block"}}>
            <div className="email-info">
                <p>Email: example@gmail.com</p>
            </div>
            
            <div className="phone-info">
                <p>Phone Number: (123) - 456 - 7890</p>
            </div>

            <div className="address-info">
                <p>Address: 123 st.</p>
            </div>
        </div>
    )
}