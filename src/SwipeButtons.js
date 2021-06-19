import React from 'react';
import './SwipeButtons.css';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons() {
    return (
    
        <div className="swipeButtons">
              <IconButton className="swipeButtons_Close">
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons_Check">
                <CheckIcon fontSize="large"/>
            </IconButton>
          
        </div>
    
    )
}

export default SwipeButtons
