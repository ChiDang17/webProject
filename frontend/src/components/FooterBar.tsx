import React from "react"

export const FooterBar = () => {
    return (
        
            <div className="w-full h-20 bg-[#F0CFD4] sticky top-0">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <div className="email-info" style={{ fontFamily: "serif, Georgia", padding: "30px", textAlign: "justify", color: "black" }}>
                            <p>Email: example@gmail.com</p>
                        </div>
            
                        <div className="phone-info" style={{ fontFamily: "serif, Georgia", padding: "30px", textAlign: "justify", color: "black" }}>
                            <p>Phone Number: (123) - 456 - 7890</p>
                        </div>

                        <div className="address-info" style={{ fontFamily: "serif, Georgia", padding: "30px", textAlign: "justify", color: "black" }}>
                            <p>Address: 123 st.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
}