import React, {useState, useEffect} from "react";
import {  useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import env from "../const"

const PaymentDetails = () => {
    //params for fetching crypto price
    const { crypto } = useParams();
    const [cryptoPrice, setCryptoPrice] = useState(null);
    const [nairaRatez, setNairaRatez] = useState(null);

    const nairaRate = nairaRatez + 18
    const serviceCharge = env('serviceCharge')

    console.log("Naira Rate: "+nairaRate)
    console.log("Service charge: "+serviceCharge)

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
        }, 30000); //60k ms = 1m, 30k = 30s

        return () => {
            clearInterval(interval); // Cleanup interval on unmount
        };
    });

    // FETCH NAIRA RATE FROM BINANCE
    const fetchNairaRate = async () => {
        try {
            const response = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=USDTNGN`);
            const price = parseFloat(response.data.price);
            setNairaRatez(price);

        } catch (error) {
            console.error("Error fetching naira rate:", error);
        }
    };
    useEffect(() => {
        fetchNairaRate();
        const interval = setInterval(() => {
            fetchNairaRate();
        }, 30000); //60k ms = 1m, 30k = 30s

        return () => {
            clearInterval(interval); // Cleanup interval on unmount
        };
    });
    
    const handleBackClick = () => {
        // Navigate back to the previous page (CryptoScreen)
        navigate(-1);
    };
    
    const nairaValue = (cryptoPrice * nairaRate); //naira value of the crypto
    const formattedNairaValue = nairaValue !== null ? nairaValue.toLocaleString() : "Loading price..."; //formatted

    //BUY PAGE (CRYPTO TAB)
    // State to track the input value
    const [inputValue, setInputValue] = useState("");
    const formattedCryptoPrice = cryptoPrice !== null ? cryptoPrice.toLocaleString() : "Loading price..."; 
    const totalN = nairaValue !== null ? (serviceCharge * nairaValue) + nairaValue : null;
    const formattedTotalN = totalN !== null ? totalN.toLocaleString() : "Loading total...";
    // Calculate the result of formattedTotalN divided by the input value
    const result = formattedTotalN !== null && inputValue !== "" ? (formattedTotalN.replace(/,/g, "") * inputValue).toLocaleString() : "-";

    // BUY PAGE (NAIRA TAB)
    // State to track the input value
    var [inputValuec, setInputValuec] = useState("");
    const totalC = inputValuec !== null ? ((1 - serviceCharge) * inputValuec) : null;
    // Calculate the result of formattedTotalN divided by the input value
    //const resultc = formattedTotalC !== null && inputValuec !== "" ? (formattedTotalC.replace(/,/g, "") / nairaValue).toLocaleString() : "-";
    const resultcr = (totalC / nairaValue).toFixed(4);
    var resultc = parseFloat(resultcr);
    inputValuec = inputValuec.toLocaleString();
    resultc = resultc.toLocaleString();

    // CODE FOR SELL (CRYPTO TAB)
    const s_total = nairaValue !== null ? ((1 - serviceCharge) * nairaValue) : null;
    const s_formattedTotal = s_total !== null ? s_total.toLocaleString() : "Loading total...";
    console.log(nairaValue)
    // State to track the input value
    const [s_inputValue, s_setInputValue] = useState("");
    const s_result = formattedTotalN !== null && s_inputValue !== "" ? (s_formattedTotal.replace(/,/g, "") * s_inputValue).toLocaleString() : "-";
    

    // SELL PAGE (NAIRA TAB)
    // State to track the input value
    const [s_inputValuec, s_setInputValuec] = useState("");
    const s_totalC = s_inputValuec !== null ? s_inputValuec - (serviceCharge * s_inputValuec) : null;
    // Calculate the result of formattedTotalN divided by the input value
    //const resultc = formattedTotalC !== null && inputValuec !== "" ? (formattedTotalC.replace(/,/g, "") / nairaValue).toLocaleString() : "-";
    const resultnr = (s_totalC / nairaValue).toFixed(5);
    var s_resultc = parseFloat(resultnr);
    s_resultc = s_resultc.toLocaleString();
    
    
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
    // Event handler for input value change
    const s_handleInputChange = (event) => {
        const value = event.target.value;
        s_setInputValue(value);
    };
    // Event handler for input value change
    const s_handleInputChangec = (event) => {
        const value = event.target.value;
        s_setInputValuec(value);
    };

    const handleProceedClick = () => {
        navigate(`/naira-details/`, { state: { inputValue, result, crypto, formattedNairaValue } });
    };
    const handleProceedClickc = () => {
        navigate(`/naira-details/`, { state: { inputValuec, resultc, crypto, formattedNairaValue } });
    };

    const s_handleProceedClick = () => {
        navigate(`/crypto-details/`, { state: { s_inputValue, s_result, crypto } });
    };
    const s_handleProceedClickc = () => {
        navigate(`/crypto-details/`, { state: { s_inputValuec, s_resultc, crypto } });
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
                            {/* <p className="text-center">1 {crypto}: ${formattedCryptoPrice} - ₦{formattedNairaValue}</p> */}
                            
                            <p className="text-center">{crypto}: ${formattedCryptoPrice}</p>
                        </div>
                        <div className="p-5 text-white">
                            <ul className="nav nav-underline nav-fill" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active text-white" id="crypto-tab" data-bs-toggle="tab" data-bs-target="#crypto-tab-pane" type="button" role="tab" aria-controls="crypto-tab-pane" aria-selected="true">{crypto}</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-white" id="naira-tab" data-bs-toggle="tab" data-bs-target="#naira-tab-pane" type="button" role="tab" aria-controls="naira-tab-pane" aria-selected="false">Naira</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="crypto-tab-pane" role="tabpanel" aria-labelledby="crypto-tab" tabIndex="0">
                                    <div className="py-5">
                                        <input type="number" className="form-control px-3" aria-label={`Amount in ${crypto}`}
                                            placeholder={`Amount in ${crypto}`} 
                                            value={inputValue}
                                            onChange={handleInputChange} step="any"></input>
                                        <div className="py-3 d-block">
                                            <small >Amount to pay(inclusive of charges): ₦{result}</small>
                                            {/* <small id="5m-warn" className="d-block mb-3 px-2 py-1 fw-semibold text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-2"></small> */}
                                            <div className="d-grid gap-2">
                                                <button className="btn btn-outline-light mt-3 d-inline-block" onClick={handleProceedClick}>Proceed</button>
                                            </div>
                                        </div>
                                        <div className="bg-opacity-25 p-3 border border-warning bg-warning rounded">
                                            <h5 className="alert-heading">Rules</h5> 
                                            <ul>
                                                <li><small>Do not use crypto related words in transfer description</small></li>
                                                <li><small>For transfers over 5 Million Naira, contact us on 
                                                    <a href={`https://api.whatsapp.com/send?phone=2347032311325&text=I%20want%20to%20buy%20${crypto}%20of%20over%205%20million`}
                                                        className="link-success text-decoration-none"> Whatsapp</a>
                                                    </small>
                                                </li>
                                                <li><small>Transaction receipts should be saved for reference</small></li>
                                            </ul>
                                        </div>
                                        <a href="https://api.whatsapp.com/send?phone=2347032311325" className="float" target="_blank" rel="noreferrer">
                                            <i className="fa fa-brands fa-whatsapp my-float"></i>
                                        </a>
                                    </div>
                                    
                                </div>
                                <div className="tab-pane fade " id="naira-tab-pane" role="tabpanel" aria-labelledby="naira-tab" tabindex="0">
                                    <div className="py-5">
                                        <input type="number" className="form-control px-3" aria-label={`Amount in Naira`}
                                            placeholder={`Amount in Naira`}
                                            value={inputValuec}
                                            onChange={handleInputChangec} step="any"></input>
                                        <div className="py-3 d-block">
                                            <small >Amount to pay(inclusive of charges): {crypto} {resultc}</small>
                                            {/* <small id="5m-warn" className="d-block mb-3 px-2 py-1 fw-semibold text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-2"></small> */}
                                            <div className="d-grid gap-2">
                                            <button className="btn btn-outline-light mt-3 d-inline-block" onClick={handleProceedClickc}>Proceed</button>
                                            </div>
                                        </div>
                                        <div className="p-3 border border-warning bg-warning bg-opacity-10 rounded" role="alert">
                                            <h5 className="alert-heading">Rules</h5>
                                            <ul>
                                                <li><small>Do not use crypto related words in transfer description</small></li>
                                                <li><small>For transfers over 5 Million Naira, contact us on  
                                                        <a href={`https://api.whatsapp.com/send?phone=2347032311325&text=I%20want%20to%20buy%20${crypto}%20of%20over%205%20million`}
                                                    className="link-success text-decoration-none"> Whatsapp</a>
                                                    </small>
                                                </li>
                                                <li><small>Transaction receipts should be saved for reference</small></li>
                                            </ul>
                                        </div>
                                        <a href="https://api.whatsapp.com/send?phone=2347032311325" className="float" target="_blank" rel="noreferrer">
                                            <i className="fa fa-whatsapp my-float"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                ) : (
                    <div className="text-center">
                        <div className="spinner-grow spinner-grow-sm m-1" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow spinner-grow-sm m-1" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow spinner-grow-sm m-1" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow spinner-grow-sm m-1" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                {/* Add other payment details here */}
            </div>
        );
    }
    else if (selectedValue === 2) {
        // CODE FOR SELL PAGE
        return (
            <div className="payment-details pcentered">
                <div className="row pt-3">
                    <div className="col-2" >
                        <img src="/icon/back-black.png" height="25px" className="m-3" alt="back-arrow" onClick={handleBackClick} />
                    </div>
                    <div className="col-2" >

                    </div>
                    <div className="col-5 p-3 buy-sell">
                        <h4>Sell <b>{crypto}</b></h4>
                    </div>
                    <div className="col-3" >

                    </div>
                </div>
                {cryptoPrice !== null ? (
                    <div>
                        <div className="px-4">
                            {/* <p className="text-center">1 {crypto}: ${formattedCryptoPrice} - ₦{formattedNairaValue}</p> */}
                            <p className="text-center">{crypto}: ${formattedCryptoPrice}</p>
                        </div>
                        <div className="p-5 ">
                            <ul className="nav nav-underline nav-fill" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active text-black" id="crypto-tab" data-bs-toggle="tab" data-bs-target="#crypto-tab-pane" type="button" role="tab" aria-controls="crypto-tab-pane" aria-selected="true">{crypto}</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-black" id="naira-tab" data-bs-toggle="tab" data-bs-target="#naira-tab-pane" type="button" role="tab" aria-controls="naira-tab-pane" aria-selected="false">Naira</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="crypto-tab-pane" role="tabpanel" aria-labelledby="crypto-tab" tabIndex="0">
                                    <div className="py-5">
                                        <input required type="number" className="form-control px-3 border-dark" aria-label={`Amount in ${crypto}`}
                                            placeholder={`Amount in ${crypto}`}
                                            value={s_inputValue}
                                            onChange={s_handleInputChange} step="any" ></input>
                                        <div className="py-3 d-block">
                                            <small >Amount to pay(inclusive of charges): ₦{s_result}</small>
                                            {/* <small id="5m-warn" className="d-block mb-3 px-2 py-1 fw-semibold text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-2"></small> */}
                                            <div className="d-grid gap-2">
                                                <button className="btn btn-outline-dark mt-3 d-inline-block" onClick={s_handleProceedClick}>Proceed</button>
                                            </div>
                                        </div>
                                        <div className="p-3 border border-warning bg-warning bg-opacity-25 rounded" role="alert">
                                            <h5 className="alert-heading">Rules</h5>
                                            <ul>
                                                <li><small>Reach out to us on <a href={`https://api.whatsapp.com/send?phone=2347032311325`}
                                                    className="link-success text-decoration-none"> Whatsapp</a> if you do not see your preferred network listed</small></li>
                                                <li><small>Transaction receipts should be saved for reference</small></li>
                                            </ul>
                                        </div>
                                        <a href="https://api.whatsapp.com/send?phone=2347032311325" className="float" target="_blank" rel="noreferrer">
                                            <i className="fa fa-whatsapp my-float"></i>
                                        </a>
                                    </div>

                                </div>
                                <div className="tab-pane fade " id="naira-tab-pane" role="tabpanel" aria-labelledby="naira-tab" tabindex="0">
                                    <div className="py-5">
                                        <input type="number" className="form-control px-3 border-dark" aria-label={`Amount in Naira`}
                                            placeholder={`Amount in Naira`}
                                            value={s_inputValuec}
                                            onChange={s_handleInputChangec} step="any" required></input>
                                        <div className="py-3 d-block">
                                            <small >Amount to pay(inclusive of charges): {crypto} {s_resultc}</small>
                                            {/* <small id="5m-warn" className="d-block mb-3 px-2 py-1 fw-semibold text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-2"></small> */}
                                            <div className="d-grid gap-2">
                                                <button className="btn btn-outline-dark mt-3 d-inline-block" onClick={s_handleProceedClickc}>Proceed</button>
                                            </div>
                                        </div>
                                        <div className="p-3 border border-warning bg-warning bg-opacity-25 rounded" role="alert">
                                            <h5 className="alert-heading">Rules</h5>
                                            <ul>
                                                <li><small>Reach out to us on <a href={`https://api.whatsapp.com/send?phone=2347032311325`}
                                                    className="link-success text-decoration-none"> Whatsapp</a> if you do not see your preferred network listed</small></li>
                                                <li><small>Transaction receipts should be saved for reference</small></li>
                                            </ul>
                                        </div>
                                        <a href="https://api.whatsapp.com/send?phone=2347032311325" className="float" target="_blank" rel="noreferrer">
                                            <i className="fa fa-whatsapp my-float"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ) : (
                        <div className="text-center">
                            <div className="spinner-grow spinner-grow-sm m-1" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-grow spinner-grow-sm m-1" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-grow spinner-grow-sm m-1" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-grow spinner-grow-sm m-1" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
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
