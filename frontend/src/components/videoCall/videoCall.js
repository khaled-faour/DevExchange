import React, {useEffect, useState} from  'react';
import {useCallEvents, useJoinCall, useCallControls, useAgoraClient} from '@agnostech/react-agora-ng';
import './videoCall.css';

import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import CallEndIcon from '@mui/icons-material/CallEnd';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import StopScreenShareIcon from '@mui/icons-material/StopScreenShare';

const App = () => {
	const client = useAgoraClient();


	//register event listeners
	const {events} = useCallEvents();
	
	//array of users in this call
	const [users, setUsers] = useState([]);
	
    // join the call
	const {loading, error, localUserId} = useJoinCall({
		channel: 'test',  
		userId: null,  
		token: '0062539654fa77a48d1b9c97b90aeb01667IAA3Q1huSztqwfcRqF33vS32Bs5x/Z0QWxH3x37acNtvuQx+f9gAAAAAEABUJOp9MY3jYgEAAQAxjeNi',  
		localVideoDiv: 'test'
	});

    //get the call controlls
	const { toggleVideo, 
			toggleAudio, 
			leaveCall, 
			startScreenShare, 
			stopScreenShare,
		} = useCallControls();

	useEffect(()=>{
		console.log("Client: ", client);
	}, [client])
	useEffect(() => {  
	  switch (events.event) {  
		  case "user-joined": 
			  /* add the newly joined user to the array of users. 
			     here the event object is
			     {
			     	event: 'user-joined',
				data: {
					remoteUser: {...newly connected user object}
				      }
			     }
			  */
			  setUsers(users => [...users, events.data.remoteUser]);
			  break;  
		  case "user-published":
			  console.log("user published");
			  break;  
		  case "user-unpublished": 
			  console.log("user unpublished"); 
			  break;  
		  case "user-left":
			  //remove the user from the array on leaving the call.  
			  console.log('user left');
			  setUsers(users => {  
				  const user = events.data.remoteUser;  
				  return users.filter(oldUser => oldUser.uid !== user.uid);  
			  });  
			  break;
		  // check Agora docs for all the supported events.
		}  
   }, [events, setUsers])
   return (
	<div >
		{/* call method inside any event handler  */}
		<div className="buttons">
			<button onClick={() => toggleVideo('test')}><VideocamIcon/></button>  
			<button onClick={() => toggleAudio()}><MicIcon/></button>  
			<button onClick={() => leaveCall()}><CallEndIcon/></button>  
			<button onClick={() => startScreenShare({
				channel: 'test',  
				token: '0062539654fa77a48d1b9c97b90aeb01667IAA3Q1huSztqwfcRqF33vS32Bs5x/Z0QWxH3x37acNtvuQx+f9gAAAAAEABUJOp9MY3jYgEAAQAxjeNi',  
			})}><ScreenShareIcon/></button>  
			<button onClick={() => stopScreenShare()}><StopScreenShareIcon/></button>  
		</div>
		<div id={'test'}></div> 
		<div>
			{users.map(user => (  
				<div key={user.uid.toString()} style={{position: 'absolute', top:0, left:0, right:0, bottom: 0, zIndex:998}} id={user.uid.toString()}>  
					{user.videoTrack && user.videoTrack.play(user.uid.toString())}
					{user.audioTrack && user.audioTrack.play()}
				</div>  
			))} 
		</div>
			
  </div>
);
}

export default App;