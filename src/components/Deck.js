import React from 'react';
import ReactDOM from 'react-dom';

export default class Deck extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>   
                <li ondrop = "loadSong(event);" ondragover="dragOverHandler(event);"><img src = "images/record.png" class = "limbo active" data-key="1" id = "leftDeck"/></li>
                    <li class ="vrangerLi">
                        <input type="range" min="1" max="100" value="100" class="slider vranger" oninput="volumeSlider(this.id)" id ="leftDeckVolume"/>
                    </li>          
            </div>
        );
    }
}