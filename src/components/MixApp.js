import React from 'react';
import ReactDOM from 'react-dom';
import AudioContext from './AudioContext';
import Deck from './Deck';

export default class MixApp extends React.Component
{
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
         <AudioContext/>
      </div>
    ); 
  }
}
