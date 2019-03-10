import React from 'react';
import ReactDOM from 'react-dom';
import Deck from './Deck';

export default class AudioContext extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        try {
            this.audioContext = new AudioContext();
        }
        catch(e) {
            alert('Web Audio API is not supported in this browser');
        }
    }
    componentWillUnmount () {
        this.audioContext.close();
    }
    render () {
        return (
          <div class="container-fluid">
            <div class = "col-lg-12 text-center">
                <ul class ="deck">
                    <Deck/>
                </ul>
            </div>
          </div>
        );
    }
}
