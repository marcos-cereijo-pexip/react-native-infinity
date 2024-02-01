import React from 'react'
import { MediaStream, RTCView } from 'react-native-webrtc'

interface RemoteVideoProps {
  mediaStream: MediaStream
}

export const SelfView = (props: RemoteVideoProps): JSX.Element => {
  return <RTCView mirror={true} streamURL={props.mediaStream.toURL()} />
}
