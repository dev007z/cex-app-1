import React, { Component } from "react";

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
        const { isBuySelected } = this.state;

        return (
            <div className="home-screen">
                <div className="buy-sell-container">
                    <button
                        className={isBuySelected ? "active" : ""}
                        onClick={this.handleBuyClick}
                    >
                        Buy
          </button>
                    <button
                        className={!isBuySelected ? "active" : ""}
                        onClick={this.handleSellClick}
                    >
                        Sell
          </button>
                </div>
            </div>
        );
    }
}

export default HomeScreen;
