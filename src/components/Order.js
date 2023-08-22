import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const Order = () => {
    const { orderNumber } = useParams();

    const express = require('express');
    const nodemailer = require('nodemailer');

    return (
        <div>
            <h2>Order Confirmation</h2>
            <p>Your order number: {orderNumber}</p>
        </div>
    );
};

export default Order;
