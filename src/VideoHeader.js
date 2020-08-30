import React from "react";

import AddBoxIcon from '@material-ui/icons/AddBox';

function VideoHeader({ channel, description, song }) {
  return (
    <div className="videoHeader">
      <div className="videoHeader__text">
        
        <div className="videoHeader__ticker">
          <AddBoxIcon fontSize="large" className="videoHeader__icon" />
          
        </div>
      </div>
      
    </div>
  );
}

export default VideoHeader;
