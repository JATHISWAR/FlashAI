import React from 'react';
import './About.css';
function About() {
    return (
        <div className="about"> 
               <div className="container">
                 <h1 className="title">About</h1>
              <strong>  <p className="description">Flash AI is an application developed to ease the study of students preparing for 
                    Entrance examinations like the GRE or any examinations which have verbal tests. 
                    The application uses Tensorflow for speech recognition and Flash Cards to make learning
                    exciting.Users can move across FlashCards through voice commands and also classify their 
                    learning to known and unkown through left-right swipes. Have fun trying out our new Flash
                    Ai App. </p></strong> 
               </div>
        </div>
    )
}

export default About
