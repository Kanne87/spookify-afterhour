import { PLAY, PAUSE, PLAY_PAUSE, VOLUME_CHANGE, LOAD_TRACK, TOGGLE_MUTE, TOGGLE_UNMOUNT } from '../constants/types';

export const setPlay = () => {
   return {
     type: PLAY
   };
 };

 export const setPause = () => {
  return {
    type: PAUSE
  };
};

export const setPlayPause = () => {
  return {
    type: PLAY_PAUSE
  };
};

export const volumeChange = (value) => {
  return {
    type: VOLUME_CHANGE,
    payload: value,
  };
};

export const loadTrack = (track) => {
  return {
    type: LOAD_TRACK,
    payload: track,
  };
};
export const toggleMute = () => {
  return {
    type: TOGGLE_MUTE,
  };
};
export const toggleUnmount = () => {
  return {
    type: TOGGLE_UNMOUNT,
  };
};