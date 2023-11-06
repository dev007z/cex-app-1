import React from "react";
import { useParams } from "react-router-dom";


const Order = () => {
    const { orderNumber } = useParams();
    var orderData = {
        no: orderNumber,
        status: "Pending",
        details: "",
        time: new Date().toISOString()
    }
    const placeOrder = async (orderData) => {
        try {
            const response = await fetch('http://localhost:4500/placeOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });
            console.log("Response status:", response.status); // Log the response status

            if (response.ok) {
                console.log('Order placed successfully');
                // You can handle success here, e.g., show a success message to the user
            } else {
                // Check if the response has a JSON body before parsing it
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const errorResponse = await response.json(); // Parse the error response JSON
                    console.error('Error placing order:', errorResponse);
                    // Handle the error, e.g., show an error message to the user
                } else {
                    // If the response is not JSON, handle the error accordingly
                    console.error('Error placing order. Non-JSON response.');
                    // Handle the error, e.g., show a generic error message to the user
                }
            }
        } catch (error) {
            console.error('Error placing order', error);
            // Handle the error, e.g., show an error message to the user
        }
    };

    placeOrder(orderData)

    return (
        <div>
            <h2>Order Confirmation</h2>
            <p>Your order number: {orderNumber}</p>
        </div>
    );
};

export default Order;
