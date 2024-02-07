import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

const CryptoScreen = () => {
    const location = useLocation();
    const selectedValue = location.state?.selectedValue;
    const navigate = useNavigate(); // This hook for navigation

    // Define an array of crypto options
    const cryptoOptions = [
        { symbol: "BTC", name: "Bitcoin", sym:"BTC" },
        { symbol: "ETH", name: "Ethereum", sym: "ETH" },
        { symbol: "BNB", name: "BNB", sym: "BNB" },
        { symbol: "STABLES", name: "Stable Coins (USDT/BUSD/USDC)", sym: "BUSD" },
    ];

    const handleCryptoSelect = (symbol) => {
        // Here you can perform any logic related to the selected crypto
        // For example, you can save the selected crypto to state or perform an API call

        // Navigate to the payment details page with the selected crypto
        navigate(`/payment-details/${symbol}`, { state: { selectedValue } });
    };

    if (selectedValue === 1) {
        return (
            <div className="bg-black mh-100 vh-100">
                {/* Design for Buy */}
                <div className="text-white">
                    <h1 className="text-center pt-3">Buy Crypto</h1>
                    <div className="row coins m-5">
                        {cryptoOptions.map((crypto) => (
                            <div key={crypto.symbol} className="col-lg-3 col-md-3 col-sm-4 col-6 menu-item text-center py-3" onClick={() => handleCryptoSelect(crypto.sym)}>
                                <img src={`./img/${crypto.symbol.toLowerCase()}.png`} alt={crypto.name} height="130px" />
                                <p className="h6 p-3">{crypto.name}</p>
                            </div>
                        ))}
                        <button className="btn btn-light btn-block my-5 others-btn">
                            <a href="https://api.whatsapp.com/send?phone=2347032311325&text=I%20want%20to%20buy%20crypto">Others</a>
                        </button>
                    </div>
                </div>
                <a href="https://api.whatsapp.com/send?phone=2347032311325" className="float" target="_blank" rel="noreferrer">
                    <i className="fa fa-whatsapp my-float"></i>
                </a>
            </div>

        );

    } 
    else if (selectedValue === 2) {
        return (
            <div>
                {/* Design for Sell */}
                <div>
                    <h1 className="text-center pt-3">Sell Crypto</h1>
                    <div className="row coins m-5">
                            {cryptoOptions.map((crypto) => (
                                <div key={crypto.symbol} className="col-lg-3 col-md-3 col-sm-4 col-6 menu-item text-center py-3" onClick={() => handleCryptoSelect(crypto.sym)}>
                                    <img src={`./img/${crypto.symbol.toLowerCase()}.png`} alt={crypto.name} height="130px" />
                                    <p className="h6 p-3">{crypto.name}</p>
                                </div>
                            ))}
                            <button className="btn btn-outline-dark btn-block my-5 others-btn">
                                <a href="https://api.whatsapp.com/send?phone=2347032311325&text=I%20want%20to%20sell%20crypto">Others</a>
                            </button>
                    </div>
                </div>
                <a href="https://api.whatsapp.com/send?phone=2347032311325" className="float" target="_blank" rel="noreferrer">
                    <i className="fa fa-brands fa-whatsapp my-float"></i>
                </a>
            </div>
        );
    } 
    else {
        return (
            <div>
                {/* Default design or error message */}
                <h1>Invalid Selection</h1>
            </div>
        );
    }


};

export default CryptoScreen;
