import React from 'react';
import './FlashCards.css';
import TinderCard from "react-tinder-card";

function FlashCards() {
    return (
        <div className="flashCards">
            <div className="flashCards_cardContainer">
                <TinderCard
                className="swipe"
                preventSwipe={["up","down"]}
                >
                    <div
                        className="card">
                        
                    </div>
                </TinderCard>
            </div>
        </div>
    )
}

export default FlashCards
