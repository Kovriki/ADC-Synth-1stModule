import * as Tone from "tone";
import React, { Component } from "react";

import * as bassSettings from "../tunes/bass.js";
import * as melodySettings from "../tunes/melody.js";
import * as drumsSettings from "../tunes/drums.js";

import ToneSynth from "../modules/ToneSynth";
import Channel from "../modules/Channel";
import SC_Button from "../components/SC_Button";
import SC_Slider from "../components/SC_Slider";

let bassSynth;
let bassChorus;
let bassPingPongDelay;

let melodySynth;
let melodyChorus;
let melodyPingPongDelay;

let samplerChannel

let wave

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bassSettings,
      melodySettings,
      drumsSettings
    };
  }

  handleStart = () => {
    const { bassSettings, melodySettings, drumsSettings } = this.state;


    //
    //
    bassSynth = new Tone.Synth(bassSettings.synth);
    bassChorus = new Tone.Chorus(bassSettings.chorus).start();

    bassPingPongDelay = new Tone.PingPongDelay(
      bassSettings.pingPongDelay
    ).toDestination();

    bassSynth.chain(bassChorus, bassPingPongDelay);

    const bassPart = new Tone.Part((time, note) => {
      bassSynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      );
    }, bassSettings.sequence.steps).start(0);

    bassPart.loopEnd = bassSettings.sequence.duration;
    bassPart.loop = true;

    //
    //

    melodySynth = new Tone.Synth(melodySettings.synth);
    melodyChorus = new Tone.Chorus(melodySettings.chorus).start();

    melodyPingPongDelay = new Tone.PingPongDelay(
      melodySettings.pingPongDelay
    ).toDestination();

    melodySynth.chain(melodyChorus, melodyPingPongDelay);

    const melodyPart = new Tone.Part((time, note) => {
      melodySynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      );
    }, melodySettings.sequence.steps).start(0);

    melodyPart.loopEnd = melodySettings.sequence.duration;
    melodyPart.loop = true;
    //
    const sampler = new Tone.Sampler({
      urls: {
        A1: "00001-Linn-9000-BassDrumrum1.mp3",
        A2: "00017-Linn-9000-Snare.mp3",
      },
      baseUrl: "http://localhost:3000/samples/",
    });

    samplerChannel = new Tone.Channel(
      drumsSettings.channel
    ).toDestination();

    sampler.chain(samplerChannel);

    const drumsPart = new Tone.Part((time, note) => {
      sampler.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      );
    }, drumsSettings.sequence.steps).start(0);

    drumsPart.loopEnd = drumsSettings.sequence.duration;
    drumsPart.loop = true;
    //

    Tone.Transport.start();
    //
        wave = new Tone.Waveform();
        bassSynth.connect(wave);


  };
  ///
  handleBassValueChange = (property, value) => {
    const { bassSettings } = this.state;

    if (property === "synthType") {
      bassSynth.oscillator.type = value;
      bassSettings.synth.oscillator.type = value;
    } else if (property === "synthEnvelopeAttack") {
      bassSynth.envelope.attack = value;
      bassSettings.synth.envelope.attack = value;
    } else if (property === "synthEnvelopeDecay") {
      bassSynth.envelope.decay = value;
      bassSettings.synth.envelope.decay = value;
    } else if (property === "synthEnvelopeSustain") {
      bassSynth.envelope.sustain = value;
      bassSettings.synth.envelope.sustain = value;
    } else if (property === "synthEnvelopeRelease") {
      bassSynth.envelope.release = value;
      bassSettings.synth.envelope.release = value;

      bassPingPongDelay.wet.value = value;
      bassSettings.pingPongDelay.wet = value;
    } else if (property === "chorusWet") {
      bassChorus.wet.value = value;
      bassSettings.chorus.wet = value;
    }

    this.setState({
      bassSettings,
    });
  };
  ////

  handleMelodyValueChange = (property, value) => {
    const { melodySettings } = this.state;

    if (property === "synthType") {
      melodySynth.oscillator.type = value;
      melodySettings.synth.oscillator.type = value;
    } else if (property === "synthEnvelopeAttack") {
      melodySynth.envelope.attack = value;
      melodySettings.synth.envelope.attack = value;
    } else if (property === "synthEnvelopeDecay") {
      melodySynth.envelope.decay = value;
      melodySettings.synth.envelope.decay = value;
    } else if (property === "synthEnvelopeSustain") {
      melodySynth.envelope.sustain = value;
      melodySettings.synth.envelope.sustain = value;
    } else if (property === "synthEnvelopeRelease") {
      melodySynth.envelope.release = value;
      melodySettings.synth.envelope.release = value;
    } else if (property === "pingPongDelayWet") {
      melodyPingPongDelay.wet.value = value;
      melodySettings.pingPongDelay.wet = value;
    } else if (property === "chorusWet") {
      melodyChorus.wet.value = value;
      melodySettings.chorus.wet = value;
    }

    this.setState({
      melodySettings,
    });
  };

    ////
    handleDrumsValueChange = (property, value) => {
      const { melodySettings } = this.state;

      if (property === "channelVolume") {
        samplerChannel.value.value = value;
        drumsSettings.channel.volume.value = value;
      } else if (property === "chanelMute") {
        samplerChannel.mute = value;
        drumsSettings.channel.mute = value;
      }

      this.setState({
        drumsSettings,
      });
    };

    draw = (value) => {
      resizeCanvas(windowWidth, windowHeignt);
      if (ready){
        let buffer = wave.getValue(0);
        for (let i=0; i < buffer.length; i++){
          let x = map(i,0, buffer.length, 0, width);
          let y = map(buffer[i], -1, 1, height);
          point (x,y);
        }
      }
    }




  render(){
    const { bassSettings, melodySettings, drumsSettings } = this.state;

    return (
      <div className="Container">
        <SC_Button
          text="Art Design & Coding Community"
          handleClick={this.handleStart}
        />
        <p>bass</p>
        <ToneSynth
          settings={bassSettings}
          handleValueChange={this.handleBassValueChange}
        />
        <p>melody</p>
        <ToneSynth
          settings={melodySettings}
          handleValueChange={this.handleMelodyValueChange}
        />
        <SC_Slider
          name="Chorus Wet"
          min={0}
          max={1}
          step={0.01}
          value={bassSettings.chorus.wet}
          property="chorusWet"
          handleChange={this.handleValueChange}
        />
        <SC_Slider
          name="Delay Wet"
          min={0}
          max={1}
          step={0.01}
          value={bassSettings.pingPongDelay.wet}
          property="pingPongDelayWet"
          handleChange={this.handleValueChange}
        />
        <Channel
        settings={drumsSettings}
        handleValueChange = {this.handleDrumsValueChange}
        />
      </div>
    );
  }
}
