import {
   PLAY,
   PAUSE,
   PLAY_PAUSE,
   VOLUME_CHANGE,
   LOAD_TRACK,
   TOGGLE_MUTE,
   TOGGLE_UNMOUNT,
 } from "../constants/types";

 
 const initialState = {
   playing: false,
   volume: 0.8,
   url: null,
   played: 0,
   loaded: 0,
   muted: false,
   pip: false,
   stopOnUnmount: false,
 };
 
 export default function (state = initialState, action) {
   switch (action.type) {
     case PLAY:
       return {
         ...state,
         playing: true,
       };
       case PAUSE:
       return {
         ...state,
         playing: false,
       };
       case PLAY_PAUSE:
       return {
         ...state,
         playing: !state.playing,
       };
       case VOLUME_CHANGE:
       return {
         ...state,
         volume: action.payload,
       };
       case LOAD_TRACK:
       return {
         ...state,
         url: action.payload.url,
         played: action.payload.played,
         loaded: action.payload.loaded,
         pip: action.payload.pip,
         playing: true,
       };
       case TOGGLE_MUTE:
       return {
         ...state,
         muted: !state.muted,
       };
       case TOGGLE_UNMOUNT:
       return {
         ...state,
         stopOnUnmount: !state.stopOnUnmount,
       };
     default:
       return state;
   }
 }
 