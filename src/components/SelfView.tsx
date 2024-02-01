import React from 'react'
import type { StyleProp, ViewStyle } from 'react-native'
import { MediaStream, RTCView } from 'react-native-webrtc'

interface RemoteVideoProps {
  mediaStream: MediaStream
  objectFit?: 'contain' | 'cover' | undefined
  style?: StyleProp<ViewStyle>
}

export const SelfView = (props: RemoteVideoProps): JSX.Element => {
  return <RTCView mirror={true} streamURL={props.mediaStream.toURL()} objectFit={props.objectFit} style={props.style} />
}
