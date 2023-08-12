import React, { Component } from "react";
import "../App.css";

class HomeScreen extends Component {
    state = {
        isBuySelected: true,
    };

    handleBuyClick = () => {
        this.setState({
            isBuySelected: true,
        });
    };

    handleSellClick = () => {
        this.setState({
            isBuySelected: false,
        });
    };
    render() {

        return (
            <div className="home-screen">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
                <div className="buy-sell-container">
                    <div className="split top" onClick={this.handleBuyClick}>
                        <h1 className="display-4 centered text-white">Buy</h1>
                    </div>

                    <div className="split bottom" onClick={this.handleSellClick}>
                        <h1 className="display-4 centered text-black">Sell</h1>
                    </div>
                    
                    
                </div>
            </div>
        );
    }
}

export default HomeScreen;
