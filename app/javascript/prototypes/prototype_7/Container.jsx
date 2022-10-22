import * as Tone from 'tone'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export default class Container extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    const synthSettings = {
      volume: -20,
      detune: 0,
      portamento: 0.05,
      envelope: {
        attack: 0.05,
        attackCurve: 'exponential',
        decay: 0.7,
        decayCurve: 'exponential',
        sustain: 0.5,
        release: 0.1,
        releaseCurve: 'exponential'
      },
      oscillator: {
        type: 'square',
        modulationType: 'square',
        // partialCount: 0,
        // partials: [],
        phase: 0,
        harmonicity: 0.5
      }
    }









var context = new AudioContext();

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeRow: 1 };
  }

  componentDidMount() {
    var component = this;
    setInterval(function() {
      var newRow = component.state.activeRow + 1;
      if (newRow === 11) { newRow = 1 };
      component.setState({
        activeRow: newRow
      });
    }, 200);
  }

  render() {
    return (
      <div>
        <ButtonRow row="1" active={this.state.activeRow == 1} />
        <ButtonRow row="2" active={this.state.activeRow == 2} />
        <ButtonRow row="3" active={this.state.activeRow == 3} />
        <ButtonRow row="4" active={this.state.activeRow == 4} />
        <ButtonRow row="5" active={this.state.activeRow == 5} />
        <ButtonRow row="6" active={this.state.activeRow == 6} />
        <ButtonRow row="7" active={this.state.activeRow == 7} />
        <ButtonRow row="8" active={this.state.activeRow == 8} />
        <ButtonRow row="9" active={this.state.activeRow == 9} />
        <ButtonRow row="10" active={this.state.activeRow == 10} />
      </div>
      )
  }
}

class ButtonRow extends React.Component {
  _getClasses() {
    var classes = "button-row";
    if (this.props.active) {
      classes += " active-row";
    }
    return classes;
  }

  render () {
    return (
      <div className={this._getClasses()}>
        <Button row={this.props.row} col="1" activeRow={this.props.active} />
        <Button row={this.props.row} col="2" activeRow={this.props.active} />
        <Button row={this.props.row} col="3" activeRow={this.props.active} />
        <Button row={this.props.row} col="4" activeRow={this.props.active} />
        <Button row={this.props.row} col="5" activeRow={this.props.active} />
        <Button row={this.props.row} col="6" activeRow={this.props.active} />
        <Button row={this.props.row} col="7" activeRow={this.props.active} />
        <Button row={this.props.row} col="8" activeRow={this.props.active} />
        <Button row={this.props.row} col="9" activeRow={this.props.active} />
        <Button row={this.props.row} col="10" activeRow={this.props.active} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Kick row={this.props.row} activeRow={this.props.active} />
      </div>
    )
  }
}

class Button extends React.Component {
  _getClassNames() {
    var names = "synth-button";
    if (this.state.on) {
      names += " synth-button-active";
    }
    return names;
  }

  _playTone() {
    var col = parseInt(this.props.col);

    var frequency = 100 + (100 * col);
    new Voice(frequency).start();
  }

  _changeHue() {
     var colours = [
      "#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3",
      "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39",
      "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E",
      "#607D8B"
    ];
    var randomColour = colours[Math.floor(Math.random()*colours.length)]

    document.getElementsByTagName("body")[0].style.background = randomColour;
  }

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      on: false
    }
  }

  render() {
    if (this.state.on && this.props.activeRow) {
      this._playTone();
      this._changeHue();
    }
    return <div onClick={this.onClick} className={this._getClassNames()}></div>
  }


  onClick() {
    this.setState({
     on: !this.state.on,
    });
  }
}

class Kick extends Button {
  _playTone() {
    new KickTone().start();
  }
}

ReactDOM.render(
  <Synth />,
  document.getElementById('synth-container')
);

/*
Voice function from http://blog.chrislowis.co.uk/2013/06/10/playing-multiple-notes-web-audio-api.html
*/
var Voice = (function(context) {
    function Voice(frequency){
      this.frequency = frequency;
    };

    Voice.prototype.start = function() {
      /* VCO */
      var vco = context.createOscillator();
      vco.type = vco.SINE;
      vco.frequency.value = this.frequency;

      /* VCA */
      var vca = context.createGain();
      vca.gain.value = 0.3;

      /* connections */
      vco.connect(vca);
      vca.connect(context.destination);

      vco.start(0);

      setTimeout(function(){
        vco.stop(0);
      }, 199);
    };

    return Voice;
  })(context);

var KickTone = (function(context) {
    function KickTone(frequency){
    };

    KickTone.prototype.start = function() {
      var vco = context.createOscillator();
      var gain = context.createGain();
      vco.connect(gain);
      gain.connect(context.destination)
      vco.frequency.setValueAtTime(150, context.currentTime);
	    gain.gain.setValueAtTime(1, context.currentTime);
      vco.frequency.exponentialRampToValueAtTime(0.01, context.currentTime + 0.5);
      gain.gain.exponentialRampToValueAtTime(0.01,  context.currentTime + 0.5);

      vco.start( context.currentTime);
      vco.stop( context.currentTime + 0.5);
    };

    return KickTone;
  })(context);
}

render(){
  <div id="synth-container"></div>
}



}
