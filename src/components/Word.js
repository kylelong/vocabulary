import React, { Component } from 'react';
import '../Word.css';
class Word extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{this.props.word} <p class="card-text"><small class="text-muted"> ({this.props.pos})</small></p></h5>
                    <p class="card-text">{this.props.definition}</p>
                    <p class="card-text"><small class="text-muted">{this.props.date}</small></p>
                </div>
            </div>
        );
    }
}

export default Word;