import React,{useState,useEffect} from "react";
import "./FlashCards.css";
import TinderCard from "react-tinder-card";
import axios from './Axios.js';


function FlashCards() {
    const [people,setPeople] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get('/flashai/cards');
            setPeople(req.data);
        }

        fetchData();
        
    }, []);

    const swiped = (direction,wordToDelete) =>{
        console.log("removing: "+wordToDelete);
     
    
    };

    const outOfFrame = (word) => {
        console.log(word + " left the screen");
    };




    return (
        <div className="flashCards">
            <div className="flashCards__cardContainer">

            {
                people.map((wordcard)=>(
                    <TinderCard
                    className="swipe"
                    key = {wordcard.word}
                    preventSwipe = {["up","down"]}
                    onSwipe={(dir) => swiped(dir,wordcard.word)}
                    onCardLeftScreen = {()=>outOfFrame(wordcard.word)}
                    >
                    <div
                        className="card">
                            <h1 className="word_title">{wordcard.word}</h1>
                            <h3 className="word_description">{wordcard.description}</h3>
                    </div>

                    </TinderCard>

                ))
            }
            </div>
        </div>
    );



}
export default FlashCards
