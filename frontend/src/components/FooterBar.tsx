import React from "react"

export const FooterBar = () => {
    return (
        
            <div className="w-full h-20 bg-[#400000] sticky top-0">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <div className="footer-bar-text">
                            <p>Email: example@gmail.com</p>
                        </div>
            
                        <div className="footer-bar-text">
                            <p>Phone Number: (123) - 456 - 7890</p>
                        </div>

                        <div className="footer-bar-text">
                            <p>Address: 123 st.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
}