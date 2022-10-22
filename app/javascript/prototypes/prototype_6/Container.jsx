import * as Tone from 'tone'
import React, { Component } from 'react'

import SC_Button from './SC_Button'

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
    const tremoloSettings = {
      wet: 1,
      frequency: 1,
      type: 'square',
      depth: 0.1,
      spread: 100
    }
    const jcReverbSettings = {
      wet: 1,
      roomSize: 0.4
    }
    const pingPongDelaySettings = {
      wet: 1,
      delayTime: 0.5,
      maxDelayTime: 1
    }
    const chorusSettings = {
      wet: 1,
      type: 'square',
      frequency: 5.5,
      delayTime: 1.5,
      depth: 1,
      spread: 180
    }
    const distortionSettings = {
      wet: 1,
      distortion: 4,
      oversample: '4x'
    }

    const distortionNode = new Tone.Distortion(distortionSettings).toDestination()
    const chorusNode = new Tone.Chorus(chorusSettings).connect(distortionNode)
    // const pingPongDelay = new Tone.PingPongDelay(pingPongDelaySettings).connect(chorusNode)
    // const tremolo = new Tone.Tremolo(tremoloSettings).connect(pingPongDelay)
    const jcReverbNode = new Tone.JCReverb(jcReverbSettings).connect(chorusNode)
    const synth = new Tone.Synth(synthSettings).connect(jcReverbNode)
    // synth.triggerAttackRelease("C4", "8n")


    //
    //
    // Мелодия
    //
    //

    // Целые ноты
    // const sequence = [
    //   {
    //     time: '0:0:0',
    //     noteName: 'C3',
    //     duration: '1m',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:0:0',
    //     noteName: 'G4',
    //     duration: '1m',
    //     velocity: 1
    //   }
    // ]

    // Четвертные ноты играются в четвертные интервалы
    const sequence = [
      {
        time: '0:0:0',
        noteName: 'C3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:1:0',
        noteName: 'E3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:2:0',
        noteName: 'G3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:3:0',
        noteName: 'B4',
        duration: '4n',
        velocity: 1
      },
      {
        time: '1:0:0',
        noteName: 'G4',
        duration: '4n',
        velocity: 1
      },
      {
        time: '1:1:0',
        noteName: 'E4',
        duration: '4n',
        velocity: 1
      },
      {
        time: '1:2:0',
        noteName: 'C4',
        duration: '4n',
        velocity: 1
      },
      {
        time: '1:3:0',
        noteName: 'E4',
        duration: '4n',
        velocity: 1
      }
    ]

    // Шестнадцатые ноты
    // const sequence = [
    //   {
    //     time: '0:0:0',
    //     noteName: 'C3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:0:1',
    //     noteName: 'E3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:0:2',
    //     noteName: 'G3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:0:3',
    //     noteName: 'B4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:1:0',
    //     noteName: 'G4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:1:1',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:1:2',
    //     noteName: 'C4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:1:3',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:2:0',
    //     noteName: 'C3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:2:1',
    //     noteName: 'E3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:2:2',
    //     noteName: 'G3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:2:3',
    //     noteName: 'B4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:3:0',
    //     noteName: 'G4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:3:1',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:3:2',
    //     noteName: 'C4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:3:3',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   //
    //   {
    //     time: '1:0:0',
    //     noteName: 'C3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:0:1',
    //     noteName: 'E3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:0:2',
    //     noteName: 'G3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:0:3',
    //     noteName: 'B4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:1:0',
    //     noteName: 'G4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:1:1',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:1:2',
    //     noteName: 'C4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:1:3',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:2:0',
    //     noteName: 'C3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:2:1',
    //     noteName: 'E3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:2:2',
    //     noteName: 'G3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:2:3',
    //     noteName: 'B4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:3:0',
    //     noteName: 'G4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:3:1',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:3:2',
    //     noteName: 'C4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:3:3',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   }
    // ]

    // Тестовая мелодия
    // const sequence = [
    //   {
    //     time: '0:0:0',
    //     noteName: 'D4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:1:0',
    //     noteName: 'A4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:2:0',
    //     noteName: 'A3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:3:0',
    //     noteName: 'F3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:0:0',
    //     noteName: 'D4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:1:0',
    //     noteName: 'A4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:2:0',
    //     noteName: 'A3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:3:0',
    //     noteName: 'F3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '2:1:0',
    //     noteName: 'A4',
    //     duration: '2m',
    //     velocity: 1
    //   },
    //   {
    //     time: '2:3:0',
    //     noteName: 'G4',
    //     duration: '2m',
    //     velocity: 1
    //   },
    //   {
    //     time: '3:1:0',
    //     noteName: 'G4',
    //     duration: '2m',
    //     velocity: 1
    //   },
    //   {
    //     time: '3:2:0',
    //     noteName: 'A3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '3:3:0',
    //     noteName: 'B3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '4:0:0',
    //     noteName: 'B4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '4:1:0',
    //     noteName: 'B2',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '4:2:0',
    //     noteName: 'B4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '4:3:0',
    //     noteName: 'C2',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '5:0:0',
    //     noteName: 'C1',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '5:1:0',
    //     noteName: 'B3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '5:2:0',
    //     noteName: 'B4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '5:3:0',
    //     noteName: 'B5',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '6:0:0',
    //     noteName: 'B1',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '6:1:0',
    //     noteName: 'C2',
    //     duration: '4n',
    //     velocity: 1
    //   }

    // ]

    // Создаём партию, добавляем в неё секвенцию
    // и включаем проигрывание
    const part = new Tone.Part((time, note) => {
      synth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, sequence).start(0)

    // Указываем длительность партии
    part.loopEnd = '2m'

    // Включаем зацикливание
    part.loop = true

    // Включаем звук в браузере
    // sampler.context.resume()

    // Включаем отсчёт времени в Tone.js
    Tone.Transport.start()
  }

  render() {
    return (
      <div className="Container">
        <SC_Button
          text="Sequence"
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}
