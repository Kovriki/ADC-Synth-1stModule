import React, { Component } from 'react'

import SC_ToggleButtonSet from '../components/SC_ToggleButtonSet.jsx'
import SC_Slider from '../components/SC_Slider.jsx'

export default class ToneSynth extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings, handleValueChange  } = this.props
    const oscillatorTypes = [
      'fatsine',
      'fatsquare',
      'fatsawtooth',
      'fattriangle',
      'fmsine',
      'fmsquare',
      'fmsawtooth',
      'fmtriangle',
      'amsine',
      'amsquare',
      'amsawtooth',
      'amtriangle',
      'pulse',
      'pwm'
    ]
    return (
      <div className="ToneSynth">

      <SC_ToggleButtonSet
        name="Type"
        options={oscillatorTypes}
        value={settings.synth.oscillator.type}
        property="synthType"
        handleChange={handleValueChange}
      />
      <SC_Slider
        name="Synth Envelope Attack"
        min={0}
        max={10}
        step={0.01}
        value={settings.synth.envelope.attack}
        property="synthEnvelopeAttack"
        handleChange={handleValueChange}
      />
      <SC_Slider
        name="Synth Envelope Decay"
        min={0}
        max={10}
        step={0.01}
        value={settings.synth.envelope.decay}
        property="synthEnvelopeDecay"
        handleChange={handleValueChange}
      />
      <SC_Slider
        name="Synth Envelope Sustaine"
        min={0}
        max={1}
        step={0.01}
        value={settings.synth.envelope.sustaine}
        property="synthEnvelopeSustaine"
        handleChange={handleValueChange}
      />
      <SC_Slider
        name="Synth Envelope Release"
        min={0}
        max={1}
        step={0.01}
        value={settings.synth.envelope.release}
        property="synthEnvelopeRelease"
        handleChange={handleValueChange}
      />

      </div>
    )
  }
}
