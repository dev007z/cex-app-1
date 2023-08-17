import React from "react";
import { useLocation } from "react-router-dom";

const NairaDetails = () => {
    const location = useLocation();
    var { result } = location.state;
    var { inputValuec } = location.state;

    return (
        <div className="naira-details">
            <h1>Naira Details</h1>
            {result && <p>Result: ₦{result}</p>}
            {inputValuec && <p>Input Value: ₦{inputValuec}</p>}
            {/* Add additional content or components as needed */}
        </div>
    );
};

export default NairaDetails;