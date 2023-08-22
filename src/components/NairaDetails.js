import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Order from "./Order";
import { generateOrderNumber } from "./utils";

const NairaDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();

    var { result } = location.state;
    console.log(Number.parseInt(result))
    var { inputValuec } = location.state;

    const handleBackClick = () => {
        // Navigate back to the previous page (CryptoScreen)
        navigate(-1);
    };

    const handlePaymentCompleted = () => {
        const orderNumber = generateOrderNumber();
        console.log(orderNumber)
        navigate(`/order/${orderNumber}`);
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
    const copyToClipBoard1 = () => {
        // Get the text field
        var result = document.getElementById("trfAcct").innerText;
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
        var result = document.getElementById("trfAcct1").innerText;
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
    const copyToClipBoard3 = () => {
        // Get the text field
        var result = document.getElementById("trfAcct2").innerText;
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
                        <h4>Payment Details</h4>
                    </div>
                    <div className="col-3" >

                    </div>
                </div>
                <div className="px-5 py-4 text-center">
                    {result && 
                        <div className="two-h" onClick={copyToClipBoard}>
                            <h1 className="two-h">₦</h1> 
                            <h1  id="trfAmt" className="two-h1">
                                {result}
                            </h1>
                            <span className="two-h2 px-1 fs-3"> <i className="fa fa-clone"> </i></span>
                        </div>}
                    {inputValuec && 
                        <div className="two-h" onClick={copyToClipBoard0}>
                        <h1 className="two-h display-2">₦</h1>
                            <h1 id="trfAmt1" className="two-h1 display-2">
                                {inputValuec}
                            </h1>
                            <span className="two-h2 px-1 fs-3"> <i className="fa fa-clone"> </i></span>
                        </div>}
                    
                </div>
                <div className="px-5">
                    <ul class="nav nav-underline nav-fill" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button onClick={handlePaymentCompleted} class="nav-link active text-purple" id="kuda-tab" data-bs-toggle="tab" data-bs-target="#kuda-tab-pane" type="button" role="tab" aria-controls="kuda-tab-pane" aria-selected="true">Kuda Bank</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button onClick={handlePaymentCompleted} class="nav-link text-danger" id="zenith-tab" data-bs-toggle="tab" data-bs-target="#zenith-tab-pane" type="button" role="tab" aria-controls="zenith-tab-pane" aria-selected="false">Zenith Bank</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link text-orange" id="access-tab" data-bs-toggle="tab" data-bs-target="#access-tab-pane" type="button" role="tab" aria-controls="access-tab-pane" aria-selected="false">Access Bank</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link text-dark-purple" id="wema-tab" data-bs-toggle="tab" data-bs-target="#wema-tab-pane" type="button" role="tab" aria-controls="wema-tab-pane" aria-selected="false">Wema Bank</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="kuda-tab-pane" role="tabpanel" aria-labelledby="kuda-tab" tabIndex="0">
                            <div class="py-4">
                                <label className="small">Account Number</label><br/>
                                <div onClick={copyToClipBoard1}><span className="fs-2" id="trfAcct">1100936736</span><small className="two-h2 fs-4"> <i className="fa fa-clone text-purple"></i></small><br /></div>
                                
                                <label className="small">Account Name</label><br/>
                                <span className="fs-2">Junaid Bashir Mijinyawa</span>
                                <div className="d-grid">
                                    <button className="btn btn-outline-purple mt-3 btn-block">Payment Completed</button>
                                </div>
                            </div>

                        </div>
                        <div class="tab-pane fade" id="zenith-tab-pane" role="tabpanel" aria-labelledby="zenith-tab" tabindex="0">
                            <div class="py-4">
                                <label className="small">Account Number</label><br />
                                <div onClick={copyToClipBoard2}><span className="fs-2" id="trfAcct1">2260173542</span><small className="two-h2 fs-4"> <i className="fa fa-clone text-danger"></i></small><br /></div>

                                <label className="small">Account Name</label><br />
                                <span className="fs-2">Junaid Bashir Mijinyawa</span>

                                <div className="d-grid">
                                    <button className="btn btn-outline-danger mt-3 btn-block">Payment Completed</button>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="access-tab-pane" role="tabpanel" aria-labelledby="access-tab" tabindex="0">
                            <div class="py-4">
                                <label className="small">Account Number</label><br />
                                <div onClick={copyToClipBoard3}><span className="fs-2" id="trfAcct2">1513622264</span><small className="two-h2 fs-4"> <i className="fa fa-clone text-orange"></i></small><br /></div>

                                <label className="small">Account Name</label><br />
                                <span className="fs-2">Junaid Bashir Mijinyawa</span>

                                <div className="d-grid">
                                    <button className="btn btn-outline-orange mt-3 btn-block">Payment Completed</button>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="wema-tab-pane" role="tabpanel" aria-labelledby="wema-tab" tabindex="0">
                            <div class="py-4">
                                <label className="small">Account Number</label><br />
                                <div onClick={copyToClipBoard3}><span className="fs-2" id="trfAcct2">0246447360</span><small className="two-h2 fs-4"> <i className="fa fa-clone text-dark-purple"></i></small><br /></div>

                                <label className="small">Account Name</label><br />
                                <span className="fs-2">Junaid Bashir Mijinyawa</span>

                                <div className="d-grid">
                                    <button className="btn btn-outline-dark-purple mt-3 btn-block">Payment Completed</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add other payment details here */}
            </div>

        </div>
    );
};

export default NairaDetails;