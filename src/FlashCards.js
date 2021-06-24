import React,{useState,useEffect} from "react";
import "./FlashCards.css";
import TinderCard from "react-tinder-card";
import axios from './Axios.js';
import * as tf from "@tensorflow/tfjs";
import * as speech from "@tensorflow-models/speech-commands";

function FlashCards() {
    const direction="left";
    const [myword,setMyWord] = useState([]);
    const [model, setModel] = useState(null);
    const [action, setAction] = useState(null);
    const [labels, setLabels] = useState(null);
  

    const loadModel = async () =>{
        const recognizer = await speech.create("BROWSER_FFT")
        console.log('Model Loaded')
        await recognizer.ensureModelLoaded();
        console.log(recognizer.wordLabels())
        setModel(recognizer)
        setLabels(recognizer.wordLabels())
      }
      useEffect(()=>{loadModel() }, []); 
      function argMax(arr){
        return arr.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
      }


      const recognizeCommands = async () =>{
        console.log('Listening for commands')
        model.listen(result=>{
          console.log(result.spectrogram)
          setAction(labels[argMax(Object.values(result.scores))])
        }, {includeSpectrogram:true, probabilityThreshold:0.9})
        setTimeout(()=>model.stopListening(), 10e3)
      }

    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get('/flashai/cards');
            setMyWord(req.data);
        }

        fetchData();

        const update = action === 'left' ? direction='left':action==='right'?direction='right':" "; 

        
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
                myword.map((wordcard)=>(
                    <TinderCard
                    className="swipe"
                    key = {wordcard.word}
                    preventSwipe = {["up","down"]}
                    onSwipe={(dir) => swiped(dir,wordcard.word)}
                    onCardLeftScreen = {()=>outOfFrame(wordcard.word)}
                    >
                    <div className="card">
                            <h1 className="word_title">{wordcard.word}</h1>
                            <h3 className="word_description">{wordcard.description}</h3>
                            <button onClick={recognizeCommands} className="command" swipe={[direction]}>Command</button>
                            
                            {action ? <div>{action}</div>:<div>No Action Detected</div> }
                        
                    </div>
        
                   
                    


                    </TinderCard>

                    

                ))

            }
             
            </div>
      
        
        </div>
    );



}
export default FlashCards;
