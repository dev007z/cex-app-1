import React, { useState, useEffect} from "react";
import axios from "axios";

const AdminDashboard = () => {

    // Dummy data for orders (replace with real data in the future)
    const orders = [
        { id: 1, customerName: "John Doe", orderDate: "2023-08-15", status: "Pending" },
        // Add more dummy data items here
    ];

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer Name</th>
                        <th>Order Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.customerName}</td>
                            <td>{order.orderDate}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
