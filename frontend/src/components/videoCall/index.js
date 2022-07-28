import React from 'react';  
import ReactDOM from 'react-dom';
import VideoCall from './videoCall';

import {AgoraProvider} from '@agnostech/react-agora-ng';  
import AgoraRTC from "agora-rtc-sdk-ng"

// mode can be rtc or live. Refer Agora NG SDK docs for more info
const client = AgoraRTC.createClient({mode: "rtc", codec: "vp8"});  

const Test = () => (  
  <AgoraProvider client={client} appId={'2539654fa77a48d1b9c97b90aeb01667'}>  
	 <VideoCall/>  
  </AgoraProvider>  
);  
  
export default Test;