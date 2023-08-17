import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const buyValue = {
    selectedValue: 1
}

const sellValue = {
    selectedValue: 2
}

class HomeScreen extends Component {

    render() {
        return (
            <div className="home-screen">
                <div className="buy-sell-container">
                    {/* Buy button */}
                    <Link
                        to="/crypto" state={buyValue}
                    >
                        <div className="split top">
                        
                            <h1 className="display-4 centered text-white">Buy</h1>
                        
                        </div>
                    </Link>

                    {/* Sell button */}
                    <Link
                        to="/crypto" state={sellValue}
                    >
                        <div className="split bottom">
                        
                            <h1 className="display-4 centered text-black">Sell</h1>
                        
                        </div>
                    </Link>
                </div>
            </div>
            
        );
        
    }
}

export default HomeScreen;
