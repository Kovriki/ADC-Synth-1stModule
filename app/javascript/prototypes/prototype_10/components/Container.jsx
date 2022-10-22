import * as Tone from 'tone'
import React, { Component } from 'react'

import * as bassSettings from '../tunes/bass.js'
import * as melodySettings from '../tunes/melody.js'
import * as finalfSettings from '../tunes/finalf.js'


import ToneSynth from '../modules/ToneSynth'
import SC_Button from '../components/SC_Button'
import SC_Slider from '../components/SC_Slider'

let bassSynth
let bassChorus
let bassPingPongDelay

let melodySynth
let melodyChorus
let melodyPingPongDelay

let finalfSynth
let finalfChorus
let finalfPingPongDelay

export default class Container extends Component {
  constructor(props) {
    super(props)
      this.state = {
        bassSettings,
        melodySettings,
        finalfSettings
      }
  }

  handleStart = () => {
    const { bassSettings, melodySettings, finalfSettings } = this.state
    //
    //
    bassSynth = new Tone.Synth(bassSettings.synth)
    bassChorus = new Tone.Chorus(bassSettings.chorus).start()
    bassPingPongDelay = new Tone.PingPongDelay(
      bassSettings.pingPongDelay
    ).toDestination()
    bassSynth.chain(bassChorus, bassPingPongDelay)

    const bassPart = new Tone.Part((time, note) => {
      bassSynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, bassSettings.sequence.steps).start(0)
    bassPart.loopEnd = bassSettings.sequence.duration
    bassPart.loop = true

    //
    //

    melodySynth = new Tone.Synth(melodySettings.synth)
    melodyChorus = new Tone.Chorus(melodySettings.chorus).start()
    melodyPingPongDelay = new Tone.PingPongDelay(
      melodySettings.pingPongDelay
    ).toDestination()
    melodySynth.chain(melodyChorus, melodyPingPongDelay)

    const melodyPart = new Tone.Part((time, note) => {
      melodySynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, melodySettings.sequence.steps).start(0)
    melodyPart.loopEnd = melodySettings.sequence.duration
    melodyPart.loop = true
    //
    //

    finalfSynth = new Tone.Synth(finalfSettings.synth)
    finalfChorus = new Tone.Chorus(finalfSettings.chorus).start()
    finalfPingPongDelay = new Tone.PingPongDelay(
      finalfSettings.pingPongDelay
    ).toDestination()
    finalfSynth.chain(finalfChorus, finalfPingPongDelay)

    const finalfPart = new Tone.Part((time, note) => {
      finalfSynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, finalfSettings.sequence.steps).start(0)
    finalfPart.loopEnd = finalfSettings.sequence.duration
    finalfPart.loop = true
    //

    //
    Tone.Transport.start()
  }
///
  handleBassValueChange = (property, value) => {
    const { bassSettings } = this.state

    if (property === 'synthType') {
      bassSynth.oscillator.type = value
      bassSettings.synth.oscillator.type = value
    } else if (property === 'synthEnvelopeAttack') {
      bassSynth.envelope.attack = value
      bassSettings.synth.envelope.attack = value
    } else if (property === 'synthEnvelopeDecay') {
      bassSynth.envelope.decay = value
      bassSettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeSustain') {
      bassSynth.envelope.sustain = value
      bassSettings.synth.envelope.sustain = value
    } else if (property === 'synthEnvelopeRelease') {
      bassSynth.envelope.release = value
      bassSettings.synth.envelope.release = value

    } else if (property === 'pingPongDelayWet') {
      bassPingPongDelay.wet.value = value
      bassSettings.pingPongDelay.wet = value
    } else if (property === 'chorusWet') {
      bassChorus.wet.value = value
      bassSettings.chorus.wet = value
    }

    this.setState({
      bassSettings
    })
  }
////

  handleMelodyValueChange = (property, value) => {
    const { melodySettings } = this.state

    if (property === 'synthType') {
      melodySynth.oscillator.type = value
      melodySettings.synth.oscillator.type = value

    } else if (property === 'synthEnvelopeAttack') {
      melodySynth.envelope.attack = value
      melodySettings.synth.envelope.attack = value
    } else if (property === 'synthEnvelopeDecay') {
      melodySynth.envelope.decay = value
      melodySettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeSustain') {
      melodySynth.envelope.sustain = value
      melodySettings.synth.envelope.sustain = value
    } else if (property === 'synthEnvelopeRelease') {
      melodySynth.envelope.release = value
      melodySettings.synth.envelope.release = value

    } else if (property === 'pingPongDelayWet') {
      melodyPingPongDelay.wet.value = value
      melodySettings.pingPongDelay.wet = value
    } else if (property === 'chorusWet') {
      melodyChorus.wet.value = value
      melodySettings.chorus.wet = value
    }

    this.setState({
      melodySettings
    })
  }

  ////


    handleFinalfValueChange = (property, value) => {
      const { finalfSettings } = this.state

      if (property === 'synthType') {
        finalfSynth.oscillator.type = value
        finalfSettings.synth.oscillator.type = value

      } else if (property === 'synthEnvelopeAttack') {
        finalfSynth.envelope.attack = value
        finalfSettings.synth.envelope.attack = value
      } else if (property === 'synthEnvelopeDecay') {
        finalfSynth.envelope.decay = value
        finalfSettings.synth.envelope.decay = value
      } else if (property === 'synthEnvelopeSustain') {
        finalfSynth.envelope.sustain = value
        finalfSettings.synth.envelope.sustain = value
      } else if (property === 'synthEnvelopeRelease') {
        finalfSynth.envelope.release = value
        finalfSettings.synth.envelope.release = value

      } else if (property === 'pingPongDelayWet') {
        finalfPingPongDelay.wet.value = value
        finalfSettings.pingPongDelay.wet = value
      } else if (property === 'chorusWet') {
        finalfChorus.wet.value = value
        finalfSettings.chorus.wet = value
      }

      this.setState({
        finalfSettings
      })
    }
    ////


  render() {
    const { bassSettings, melodySettings, finalfSettings  } = this.state

    return (
      <div className="Container">
        <SC_Button
          text="Art Design & Coding Community"
          handleClick={this.handleStart}
        />
        <p>bass</p>
        <ToneSynth
        settings = {bassSettings}
        handleValueChange = {this.handleBassValueChange}
        />
        <p>melody</p>
        <ToneSynth
        settings = {melodySettings}
        handleValueChange = {this.handleMelodyValueChange}
        />

        <p>Final Fantacy</p>
        <ToneSynth
        settings = {finalfSettings}
        handleValueChange = {this.handleFinalfValueChange}
        />

      </div>
    )
  }
}
