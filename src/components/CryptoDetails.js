import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CryptoDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();

    var { s_result } = location.state;
    console.log(s_result)
    var { s_inputValuec } = location.state;

    const handleBackClick = () => {
        // Navigate back to the previous page (CryptoScreen)
        navigate(-1);
    };

    return (
        <div className="naira-details text-black">
            {/*s_result && <p>Result: ₦{s_result}</p>*/}
            {/*s_inputValuec && <p>Input Value: ₦{s_inputValuec}</p>*/}
            {/* Add additional content or components as needed */}
            <div className="payment-details pcentered">
                <div className="row pt-3">
                    <div className="col-2" >
                        <img src="/icon/back-black.png" height="25px" className="m-3" alt="back-arrow" onClick={handleBackClick} />
                    </div>
                    <div className="col-1" >

                    </div>
                    <div className="col-6 p-3 buy-sell text-center">
                        <h4>Payment Details</h4>
                    </div>
                    <div className="col-3" >

                    </div>
                </div>
                
                {/* Add other payment details here */}
                <div className="px-5 py-4 text-center text-black">
                    {s_result &&
                        <div className="two-h" >
                            <h1 className="two-h">₦</h1>
                            <h1 id="trfAmt" className="two-h1">
                                {s_result}
                            </h1>
                            <span className="two-h2 px-1 fs-3"> <i className="fa fa-clone"> </i></span>
                        </div>}
                    {s_inputValuec &&
                        <div className="two-h">
                            <h1 className="two-h display-2">₦</h1>
                            <h1 id="trfAmt1" className="two-h1 display-2">
                                {s_inputValuec}
                            </h1>
                            <span className="two-h2 px-1 fs-3"> <i className="fa fa-clone"> </i></span>
                        </div>}

                </div>
            </div>
            
        </div>
    );
};

export default CryptoDetails;