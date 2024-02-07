import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Order from "./Order";
import { generateOrderNumber } from "./utils";

const NairaDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    var { formattedNairaValue } = location.state;
    var { result } = location.state;
    var { inputValuec } = location.state;
    var { inputValue } = location.state;
    var { crypto } = location.state;
    var { resultc } = location.state;
    

    const orderNumber = generateOrderNumber();
    const whatsappUrl = `https://wa.me/2347032311325?text=Order%20number:%20${orderNumber}%0aKindly%20send%20payment%20details,%20I%20am%20paying%20through...`;


    const handleBackClick = () => {
        navigate(-1);
    };

    const handlePaymentCompleted = () => {
        {result &&
            navigate(`/order/${orderNumber}`, { state: { result, inputValue, crypto } });
        }
        {inputValuec &&
            navigate(`/order/${orderNumber}`, { state: { crypto, resultc, inputValuec } });
        }
    };

    const copyToClipBoard = () => {
        // Get the text field
        var result = document.getElementById("trfAmt").innerText;
        result = result.replace(/,/g, "")
        // Create a temporary text area element
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = result; // Replace with the value you want to copy
        document.body.appendChild(tempTextArea);

        // Select the text in the temporary text area
        tempTextArea.select();
        document.execCommand('copy');

        // Remove the temporary text area
        document.body.removeChild(tempTextArea);
    }
    const copyToClipBoard0 = () => {
        // Get the text field
        var result = document.getElementById("trfAmt0").innerText;
        // Create a temporary text area element
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = result; // Replace with the value you want to copy
        document.body.appendChild(tempTextArea);

        // Select the text in the temporary text area
        tempTextArea.select();
        document.execCommand('copy');

        // Remove the temporary text area
        document.body.removeChild(tempTextArea);
    }
    const copyToClipBoard2 = () => {
        // Get the text field
        var result = document.getElementById("trfAmt2").innerText;
        // Create a temporary text area element
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = result; // Replace with the value you want to copy
        document.body.appendChild(tempTextArea);

        // Select the text in the temporary text area
        tempTextArea.select();
        document.execCommand('copy');

        // Remove the temporary text area
        document.body.removeChild(tempTextArea);
    }
    const copyToClipBoard1 = () => {
        // Get the text field
        var result = document.getElementById("trfAmt1").innerText;
        // Create a temporary text area element
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = result; // Replace with the value you want to copy
        document.body.appendChild(tempTextArea);

        // Select the text in the temporary text area
        tempTextArea.select();
        document.execCommand('copy');

        // Remove the temporary text area
        document.body.removeChild(tempTextArea);
    }

    return (
        <div className="naira-details">
            {/* Add additional content or components as needed */}
            <div className="payment-details pcentered bg-black text-white">
                <div className="row pt-3">
                    <div className="col-2" >
                        <img src="/icon/back-white.png" height="25px" className="m-3" alt="back-arrow" onClick={handleBackClick} />
                    </div>
                    <div className="col-1" >

                    </div>
                    <div className="col-6 p-3 buy-sell text-center">
                        <h4>Order Details</h4>
                    </div>
                    <div className="col-3" >

                    </div>
                </div>
                <div className="px-5 py-4">
                    {result && 
                        <div className="mt-5">
                            <div className="d-flex mt-5" >
                                <div className="fs-4">Amount: </div> 
                                <div className="fs-4 ms-auto">
                                    <span>₦</span>
                                    <span id="trfAmt" >{result}</span>
                                    <span className=" px-1 fs-5" onClick={copyToClipBoard}> <i className="fa fa-clone"> </i></span>
                                </div>
                            </div>
                            <div className="d-flex" >
                                <div className="fs-4">Price: </div>
                                <div className="fs-4 ms-auto">
                                    <span>₦</span>
                                    <span id="trfAmt0" >{formattedNairaValue}</span>
                                    <span className="px-1 fs-5" onClick={copyToClipBoard0}> <i className="fa fa-clone"> </i></span>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="fs-4">Quantity: </div>
                                <div className="fs-4 ms-auto">
                                    <span id="trfAmt1">{inputValue}</span><span>{crypto}</span>
                                    <span className="two-h2 px-1 fs-5" onClick={copyToClipBoard1}> <i className="fa fa-clone"> </i></span>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="fs-4">Order No: </div>
                                <div className="fs-4 ms-auto">
                                    <span id="trfAmt2">{orderNumber}</span>
                                    <span className="two-h2 px-1 fs-5" onClick={copyToClipBoard2}> <i className="fa fa-clone"> </i></span>
                                </div>
                            </div>
                            
                        </div>
                    }
                    {inputValuec && 
                        <div className="mt-5">
                            <div className="d-flex mt-5" >
                                <div className="fs-4">Amount: </div> 
                                <div className="fs-4 ms-auto">
                                    <span>₦</span>
                                <span id="trfAmt" >{inputValuec}</span>
                                    <span className=" px-1 fs-5" onClick={copyToClipBoard}> <i className="fa fa-clone"> </i></span>
                                </div>
                            </div>
                            <div className="d-flex" >
                                <div className="fs-4">Price: </div>
                                <div className="fs-4 ms-auto">
                                    <span>₦</span>
                                    <span >{formattedNairaValue}</span>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="fs-4">Quantity: </div>
                                <div className="fs-4 ms-auto">
                                <span id="trfAmt1">{resultc}</span><span>{crypto}</span>
                                    <span className="two-h2 px-1 fs-5" onClick={copyToClipBoard1}> <i className="fa fa-clone"> </i></span>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="fs-4">Order No: </div>
                                <div className="fs-4 ms-auto">
                                    <span id="trfAmt2">{orderNumber}</span>
                                    <span className="two-h2 px-1 fs-5" onClick={copyToClipBoard2}> <i className="fa fa-clone"> </i></span>
                                </div>
                            </div>
                            
                        </div>
                        }
                    
                </div>
                <div className="px-5 d-grid gap-2">
                    <a className="btn btn-outline-success btn-lg" href={whatsappUrl} role="button" onClick={handlePaymentCompleted} target="blank"><i className="fa-brands fa-whatsapp"></i> Complete Order </a>
                </div>

                {/* Add other payment details here */}
            </div>

        </div>
    );
};

export default NairaDetails;