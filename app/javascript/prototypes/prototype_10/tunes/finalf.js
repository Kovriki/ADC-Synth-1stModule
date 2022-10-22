const synth = {
  volume: -15,
  detune: 0,
  portamento: 0.05,
  envelope: {
    attack: 0.05,
    attackCurve: 'exponential',
    decay: 0.2,
    decayCurve: 'exponential',
    sustain: 0.2,
    release: 1.5,
    releaseCurve: 'exponential'
  },
  oscillator: {
    type: 'sawtooth',
    modulationType: 'sine',
    // partialCount: 0,
    // partials: [],
    phase: 0,
    harmonicity: 0.5
  }
}

const chorus = {
  wet: 0.3,
  type: 'sine',
  frequency: 1.5,
  delayTime: 3.5,
  depth: 0.7,
  spread: 180
}

const pingPongDelay = { wet: 0.2, delayTime: 0.25, maxDelayTime: 1 }


const sequence = {
  steps: [
    {
      time: '0:0:0',
      noteName: 'C2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:1:0',
      noteName: 'D2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:2:0',
      noteName: 'E2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:3:0',
      noteName: 'F2',
      duration: '4n',
      velocity: 1
    },
    //
    {
      time: '1:0:0',
      noteName: 'C3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:1:0',
      noteName: 'D3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:2:0',
      noteName: 'E3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:3:0',
      noteName: 'F3',
      duration: '4n',
      velocity: 1
    },
    //
    {
      time: '2:0:0',
      noteName: 'C4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '2:1:0',
      noteName: 'D4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '2:2:0',
      noteName: 'E4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '2:3:0',
      noteName: 'F4',
      duration: '4n',
      velocity: 1
    }
    ////
    ////
    {
      time: '3:0:0',
      noteName: 'A2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '3:1:0',
      noteName: 'B2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '3:2:0',
      noteName: 'C3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '3:3:0',
      noteName: 'E3',
      duration: '4n',
      velocity: 1
    },
    //
    {
      time: '4:0:0',
      noteName: 'A3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '4:1:0',
      noteName: 'B3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '4:2:0',
      noteName: 'C4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '4:3:0',
      noteName: 'E4',
      duration: '4n',
      velocity: 1
    },
    //
    {
      time: '5:0:0',
      noteName: 'A4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '5:1:0',
      noteName: 'B4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '5:2:0',
      noteName: 'C5',
      duration: '4n',
      velocity: 1
    },
    {
      time: '5:3:0',
      noteName: 'E5',
      duration: '4n',
      velocity: 1
    }
    //
  ],
  duration: '5m'
}
export {
  synth,
  chorus,
  pingPongDelay,
  sequence
}
