import React, { useEffect } from "react";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Meeting = () => {
    
    const { id } = useParams();
    const auth = useAuth()
  useEffect(() => {
    const config = {
      name: `${auth.user.first_name} ${auth.user.last_name}`,
      meetingId: id,
      apiKey: process.env.REACT_APP_VIDEOSDK_API_KEY,

      containerId: null,

      micEnabled: true,
      webcamEnabled: true,
      participantCanToggleSelfWebcam: true,
      participantCanToggleSelfMic: true,
      raiseHand: true,

      chatEnabled: true,
      screenShareEnabled: true,
      pollEnabled: true,
      whiteboardEnabled: true,
      raiseHandEnabled: true,

      notificationSoundEnabled: true,

      joinScreen: {
        visible: true,
        title: "Join Meeting",
      },
    };

    const meeting = new VideoSDKMeeting();
    meeting.init(config);
  }, []);

  return <div></div>;
}
export default Meeting;