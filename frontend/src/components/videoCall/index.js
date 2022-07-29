import React from 'react';  
import ReactDOM from 'react-dom';
import VideoCall from './videoCall';

import {AgoraProvider} from '@agnostech/react-agora-ng';  
import AgoraRTC from "agora-rtc-sdk-ng"

// mode can be rtc or live. Refer Agora NG SDK docs for more info
const client = AgoraRTC.createClient({mode: "rtc", codec: "vp8"});  

const Test = () => (  
  <AgoraProvider client={client} appId={process.env.REACT_APP_AGORA_APP_ID}>  
	 <VideoCall/>  
  </AgoraProvider>  
);  
  
export default Test;