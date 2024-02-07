import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";


const Order = () => {
    const location = useLocation();
    const navigate = useNavigate();

    var { result } = location.state;
    var { inputValue } = location.state;
    var { resultc } = location.state;
    var { inputValuec } = location.state;
    var { crypto } = location.state;

    const { orderNumber } = useParams();
    
    const orderData = {
        no: orderNumber,
        status: "Pending",
        details: crypto + " - " + result + " - " + resultc + " - " + inputValue + " - " + inputValuec, 
        time: new Date().toISOString()
    }
    useEffect(() => {
        const placeOrder = async () => {
            try {
                const response = await fetch('http://localhost:4500/placeOrder', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(orderData),
                });
                console.log("Response status:", response.status);

                if (response.ok) {
                    console.log('Order placed successfully');
                } else {
                    // Handle errors as you've already implemented
                }
            } catch (error) {
                console.error('Error placing order', error);
            }
        };

        placeOrder();
    }, [orderData]); // Only run the effect if orderData changes

    return (
        <div>
            <div className="pcentered bg-black text-white text-center py-5 ">
                <h2>Order Confirmation</h2>
                <span className="text-center display-1 text-success"><i className="fa-solid fa-circle-check"></i></span>
                <p className="display-6">Your order number: {orderNumber}</p>
                <a className="btn btn-outline-transparent btn-transparent text-white text-bottom" role="button" href="/">Home</a>
            </div>
            
        </div>
    );
};

export default Order;
