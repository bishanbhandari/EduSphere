import React, { useRef } from 'react';
import './Video.css';
import student from '../../assets/student.mp4';
const Video = ({playState,setPlayState}) => {

    const player=useRef(null);

    const closePlayer=(e)=>{
        if(e.target===player.current){
            setPlayState(false);
        }
    }
  return (

    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
        <video src={student} autoPlay muted controls ></video>
    </div>
  )
}

export default Video;