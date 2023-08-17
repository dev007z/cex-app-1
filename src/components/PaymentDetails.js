import React, {useState, useEffect} from "react";
import {  useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

const PaymentDetails = () => {
    //params for fetching crypto price
    const { crypto } = useParams();
    const [cryptoPrice, setCryptoPrice] = useState(null);

    // get selectedValue from prev page
    const routeLocation = useLocation();
    const { selectedValue } = routeLocation.state;
    const navigate = useNavigate();

    const fetchCryptoPrice = async () => {
        try {
            const response = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${crypto}USDT`);
            const price = parseFloat(response.data.price);
            setCryptoPrice(price);

        } catch (error) {
            console.error("Error fetching crypto price:", error);
        }
    };

    useEffect(() => {
        fetchCryptoPrice();
        // Fetch price every 5 seconds
        const interval = setInterval(() => {
            fetchCryptoPrice();
        }, 10000);

        return () => {
            clearInterval(interval); // Cleanup interval on unmount
        };
    });
    const handleBackClick = () => {
        // Navigate back to the previous page (CryptoScreen)
        navigate(-1);
    };

    const nairaRate = 870.78;
    const serviceCharge = 0.05;

    // State to track the input value
    const [inputValue, setInputValue] = useState("");
    // State to track the input value
    const [inputValuec, setInputValuec] = useState("");

    const formattedCryptoPrice = cryptoPrice !== null ? cryptoPrice.toLocaleString() : "Loading price...";

    const nairaValue = (cryptoPrice * nairaRate); //naira value of the crypto
    const formattedNairaValue = nairaValue !== null ? nairaValue.toLocaleString() : "Loading price..."; //formatted
    
    const totalN = nairaValue !== null ? (serviceCharge * nairaValue) + nairaValue : null;
    const formattedTotalN = totalN !== null ? totalN.toLocaleString() : "Loading total...";

    const totalC = inputValuec !== null ? inputValuec - (serviceCharge * inputValuec) : null;
    console.log(totalC)

    // Calculate the result of formattedTotalN divided by the input value
    const result = formattedTotalN !== null && inputValue !== "" ? (formattedTotalN.replace(/,/g, "") * inputValue).toLocaleString() : "-";
    // Calculate the result of formattedTotalN divided by the input value
    //const resultc = formattedTotalC !== null && inputValuec !== "" ? (formattedTotalC.replace(/,/g, "") / nairaValue).toLocaleString() : "-";
    const resultcr = (totalC / nairaValue).toFixed(5);
    var resultc = parseFloat(resultcr);
    resultc = resultc.toLocaleString();

    // Event handler for input value change
    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
    };
    // Event handler for input value change
    const handleInputChangec = (event) => {
        const value = event.target.value;
        setInputValuec(value);
    };
    const handleProceedClick = () => {
        navigate(`/naira-details/`, { state: { result } });
    };
    const handleProceedClickc = () => {
        navigate(`/naira-details/`, { state: { inputValuec } });
    };
    

    // Here you can customize the payment details based on the selected crypto
    // You can fetch data from an API or display static content
    // For now, let's just display a placeholder message
    if (selectedValue === 1) {
        // CODE FOR BUY PAGE
        return (
            <div className="payment-details pcentered bg-black text-white">
                <div className="row pt-3">
                    <div className="col-2" >
                        <img src="/icon/back-white.png" height="25px" className="m-3" alt="back-arrow" onClick={handleBackClick}/>
                    </div>
                    <div className="col-2" >
                        
                    </div>
                    <div className="col-5 p-3 buy-sell">
                        <h4>Buy <b>{crypto}</b></h4>
                    </div>
                    <div className="col-3" >

                    </div>
                </div>
                {cryptoPrice !== null ? (
                    <div>
                        <div className="px-4">
                            <p className="text-center">1 {crypto}: ${formattedCryptoPrice} - ₦{formattedNairaValue}</p>
                        </div>
                        <div className="p-5 text-white">
                            <ul class="nav nav-underline nav-fill" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active text-white" id="crypto-tab" data-bs-toggle="tab" data-bs-target="#crypto-tab-pane" type="button" role="tab" aria-controls="crypto-tab-pane" aria-selected="true">{crypto}</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link text-white" id="naira-tab" data-bs-toggle="tab" data-bs-target="#naira-tab-pane" type="button" role="tab" aria-controls="naira-tab-pane" aria-selected="false">Naira</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="crypto-tab-pane" role="tabpanel" aria-labelledby="crypto-tab" tabIndex="0">
                                    <div class="py-5">
                                        <input type="number" class="form-control px-3" aria-label={`Amount in ${crypto}`}
                                            placeholder={`Amount in ${crypto}`} 
                                            value={inputValue}
                                            onChange={handleInputChange} step="any"></input>
                                        <div class="py-3 d-block">
                                            <small >Amount to pay(inclusive of charges): ₦{result}</small>
                                            {/* <small id="5m-warn" class="d-block mb-3 px-2 py-1 fw-semibold text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-2"></small> */}
                                            <div class="d-grid gap-2">
                                                <button className="btn btn-outline-light mt-3 d-inline-block" onClick={handleProceedClick}>Proceed</button>
                                            </div>
                                        </div>
                                        <div className="p-3 border border-warning bg-warning bg-opacity-10 rounded" role="alert">
                                            <h5 className="alert-heading">Rules</h5> 
                                            <ul>
                                                <li><small>Do not use crypto related words in transfer description</small></li>
                                                <li><small>For transfers over 5 Million Naira, contact us on <a href="wa.me" className="link-success text-decoration-none">Whatsapp</a></small></li>
                                                <li><small>Transaction receipts should be saved for reference</small></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="tab-pane fade " id="naira-tab-pane" role="tabpanel" aria-labelledby="naira-tab" tabindex="0">
                                    <div class="py-5">
                                            <input type="number" class="form-control px-3" aria-label={`Amount in Naira`}
                                                placeholder={`Amount in Naira`}
                                                value={inputValuec}
                                                onChange={handleInputChangec} step="any"></input>
                                            <div class="py-3 d-block">
                                                <small >Amount to pay(inclusive of charges): {crypto} {resultc}</small>
                                                {/* <small id="5m-warn" class="d-block mb-3 px-2 py-1 fw-semibold text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-2"></small> */}
                                                <div class="d-grid gap-2">
                                                <button className="btn btn-outline-light mt-3 d-inline-block" onClick={handleProceedClickc}>Proceed</button>
                                                </div>
                                            </div>
                                            <div className="p-3 border border-warning bg-warning bg-opacity-10 rounded" role="alert">
                                                <h5 className="alert-heading">Rules</h5>
                                                <ul>
                                                    <li><small>Do not use crypto related words in transfer description</small></li>
                                                    <li><small>For transfers over 5 Million Naira, contact us on <a href="wa.me" className="link-success text-decoration-none">Whatsapp</a></small></li>
                                                    <li><small>Transaction receipts should be saved for reference</small></li>
                                                </ul>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                ) : (
                    <p className="text-center">Loading price...</p>
                )}
                {/* Add other payment details here */}
            </div>
        );
    }
    else if (selectedValue === 2) {
        // CODE FOR SELL PAGE
        return (
            <div className="payment-details pcentered bg-light">
                <div className="row pt-3">
                    <div className="col-2" >
                        <img src="/icon/back-white.png" height="25px" className="m-3" alt="back-arrow" onClick={handleBackClick} />
                    </div>
                    <div className="col-2" >

                    </div>
                    <div className="col-4 p-3 buy-sell">
                        <h4>Sell <b>{crypto}</b></h4>
                    </div>
                    <div className="col-4" >

                    </div>
                </div>
                {cryptoPrice !== null ? (
                    <div>
                        <p>1 {crypto}: ${formattedCryptoPrice} - ₦{formattedNairaValue}</p>
                    </div>
                ) : (
                        <p>Loading price...</p>
                )}
                {/* Add other payment details here */}
            </div>
        );
    }
    else{
        return (
            <div>
                {/* Default design or error message */}
                <h1>Invalid Selection</h1>
            </div>
        );
    }

    
};

export default PaymentDetails;
