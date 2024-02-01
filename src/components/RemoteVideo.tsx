import React from 'react'
import { MediaStream, RTCView } from 'react-native-webrtc'

interface RemoteVideoProps {
  mediaStream: MediaStream
}

export const RemoteVideo = (props: RemoteVideoProps): JSX.Element => {
  return <RTCView streamURL={props.mediaStream.toURL()} />
}
