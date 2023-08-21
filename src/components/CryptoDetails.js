import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CryptoDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();

    var { result } = location.state;
    var { inputValuec } = location.state;

    const handleBackClick = () => {
        // Navigate back to the previous page (CryptoScreen)
        navigate(-1);
    };

    return (
        <div className="naira-details">
            {result && <p>Result: ₦{result}</p>}
            {inputValuec && <p>Input Value: ₦{inputValuec}</p>}
            {/* Add additional content or components as needed */}
            <div className="payment-details pcentered bg-black text-white">
                <div className="row pt-3">
                    <div className="col-2" >
                        <img src="/icon/back-white.png" height="25px" className="m-3" alt="back-arrow" onClick={handleBackClick} />
                    </div>
                    <div className="col-2" >

                    </div>
                    <div className="col-5 p-3 buy-sell">
                        <h4>Payment Details</h4>
                    </div>
                    <div className="col-3" >

                    </div>
                </div>
                
                {/* Add other payment details here */}
            </div>

        </div>
    );
};

export default CryptoDetails;