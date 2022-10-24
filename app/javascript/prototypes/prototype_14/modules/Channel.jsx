import React, { Component } from 'react'

import SC_ToggleButton from '../components/SC_ToggleButton.jsx'
import SC_Slider from '../components/SC_Slider.jsx'

export default class Channel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings, handleValueChange  } = this.props

    return (
      <div className="Channel">
      <SC_Slider
        name="Channel level"
        min={-60}
        max={10}
        step={1}
        value={settings.channel.level}
        property="channelVolume"
        handleChange={handleValueChange}
      />

      <SC_ToggleButton
        text={'Mute'}
        isOn={settings.channel.mute}
        handleClick={() => handleValueChange('chanelMute', !settings.channel.mute)}
      />

      </div>
    )
  }
}
