import React, { Component } from "react";
import "../App.css";
import { Navigate } from "react-router-dom";

const INITIAL_STATE = {
    isBuySelected: false,
    selectedValue: 1,
};

class HomeScreen extends Component {
    state = INITIAL_STATE;

    handleBuyClick = () => {
        this.setState({
            isBuySelected: true,
            selectedValue: 1,
        });
    };

    handleSellClick = () => {
        this.setState({
            isBuySelected: false,
            selectedValue: 2,
        });
    };
    render() {
        const { isBuySelected, selectedValue } = this.state;
        return (
            <div className="home-screen">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
                <div className="buy-sell-container">
                    <div className="split top" onClick={this.handleBuyClick}>
                        <h1 className={isBuySelected ? "active display-4 centered text-white" : "display-4 centered text-white"}>Buy</h1>
                    </div>

                    <div className="split bottom" onClick={this.handleSellClick}>
                        <h1 className={isBuySelected ? "active display-4 centered text-black" : "display-4 centered text-black"}>Sell</h1>
                    </div>
                </div>
                {
                    isBuySelected && (
                        <Navigate
                            to={{
                                pathname: "/crypto-selection",
                                query: { selectedValue: selectedValue },
                            }}
                        />
                    )
                }
            </div>
        );
    }
}

export default HomeScreen;
