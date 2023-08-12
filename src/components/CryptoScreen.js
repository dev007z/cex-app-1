import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const CryptoSelectionScreen = () => {
    const [selectedCrypto, setSelectedCrypto] = useState("BTC");

    const handleCryptoChange = (e) => {
        setSelectedCrypto(e.target.value);
    };

    const handleSubmit = () => {
        // Redirect the user to the payment details screen.
        const url = `/payment-details?selectedCrypto=${selectedCrypto}`;
        window.location.href = url;
    };

    return (
        <div>
            <h1>Crypto Selection Screen</h1>
            <select name="crypto" onChange={handleCryptoChange}>
                <option value="BTC">Bitcoin</option>
                <option value="ETH">Ethereum</option>
                <option value="ADA">Cardano</option>
                <option value="XRP">Ripple</option>
            </select>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default CryptoSelectionScreen;
