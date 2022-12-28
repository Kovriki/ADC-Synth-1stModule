const synth = {
  volume: 0,
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
    type: 'triangle',
    modulationType: 'sine',
    // partialCount: 0,
    // partials: [],
    phase: 0,
    harmonicity: 0.5
  }
}

const synthUI = {
  envelopeShow: false
}

const chorus = {
  wet: 0.3,
  type: 'sine',
  frequency: 1.5,
  delayTime: 3.5,
  depth: 0.7,
  spread: 180
}

const pingPongDelay = { wet: 0.2, delayTime: 0.25, maxDelayTime: 0.1 }

const sequence = {
  steps: [
    // {
    //   time: '0:0:0',
    //   noteName: 'C2',
    //   duration: '1n',
    //   velocity: 1
    // },
    // {
    //   time: '1:0:0',
    //   noteName: 'E2',
    //   duration: '1n',
    //   velocity: 1
    // },
    // {
    //   time: '2:0:0',
    //   noteName: 'A2',
    //   duration: '1n',
    //   velocity: 1
    // },
    // {
    //   time: '3:0:0',
    //   noteName: 'G2',
    //   duration: '1n',
    //   velocity: 1
    // }




  /////




      {
        time: '0:0:0',
        noteName: 'D3',
        duration: '4n',
        velocity: 0.6
      },
      {
        time: '0:1:0',
        noteName: 'B2',
        duration: '4n',
        velocity: 0.6
      },
      {
        time: '0:2:0',
        noteName: 'F3',
        duration: '4n',
        velocity: 0.6
      },
      {
        time: '0:3:0',
        noteName: 'E3',
        duration: '4n',
        velocity: 0.6
      },
      {
        time: '0:3:0',
        noteName: 'D3',
        duration: '4n',
        velocity: 0.6
      },
      {
        time: '1:0:0',
        noteName: 'F3',
        duration: '4n',
        velocity: 0.6
      },
      {
        time: '1:2:0',
        noteName: 'E3',
        duration: '4n',
        velocity: 0.6
      },
      {
        time: '1:3:0',
        noteName: 'E2',
        duration: '4n',
        velocity: 0.6
      },
      {
        time: '2:0:0',
        noteName: 'E2',
        duration: '4n',
        velocity: 0.6
      }


//  {
//       time: "0:0:0",
//       noteName: "G4",
//       duration: "4n",
//       velocity: 1,
//     },
//     {
//       time: "0:0:1",
//       noteName: "D5",
//       duration: "8n",
//       velocity: 1,
//     },
//     {
//       time: "0:1:1",
//       noteName: "C5",
//       duration: "1n",
//       velocity: 1,
//     },
//     {
//       time: "0:2:2",
//       noteName: "G4",
//       duration: "1n",
//       velocity: 1,
//     },
//     {
//       time: "0:3:3",
//       noteName: "A4",
//       duration: "4n",
//       velocity: 1,
//     },
//     {
//       time: "1:0:0",
//       noteName: "D4",
//       duration: "1n",
//       velocity: 1,
//     },
//     {
//       time: "1:0:3",
//       noteName: "F5",
//       duration: "4n",
//       velocity: 1,
//     },
//     {
//       time: "1:1:0",
//       noteName: "C4",
//       duration: "2n",
//       velocity: 1,
//     },
//     {
//       time: "1:2:0",
//       noteName: "D4",
//       duration: "4n",
//       velocity: 1,
//     },
//     ///
//     {
//       time: "1:3:0",
//       noteName: "D4",
//       duration: "4n",
//       velocity: 0.7,
//     },
//     {
//       time: "2:0:0",
//       noteName: "C4",
//       duration: "4n",
//       velocity: 0.8,
//     },
//     {
//       time: "2:1:0",
//       noteName: "A3",
//       duration: "4n",
//       velocity: 1,
//     },
//     {
//       time: "2:3:0",
//       noteName: "F3",
//       duration: "4n",
//       velocity: 1,
//     },
//     {
//       time: "3:0:0",
//       noteName: "G3",
//       duration: "4n",
//       velocity: 1,
//     },
//     {
//       time: "3:1:0",
//       noteName: "D4",
//       duration: "4n",
//       velocity: 0.7,
//     },
//     {
//       time: "3:2:0",
//       noteName: "F4",
//       duration: "4n",
//       velocity: 0.8,
//     },
//     {
//       time: "3:3:0",
//       noteName: "C4",
//       duration: "4n",
//       velocity: 1,
//     },
//     {
//       time: "4:2:0",
//       noteName: "D4",
//       duration: "4n",
//       velocity: 1,
//     },
//     {
//       time: "5:2:0",
//       noteName: "G3",
//       duration: "2n",
//       velocity: 1,
//     },


  ],
  duration: '2m',
  loop: true
}

export { synth, synthUI, chorus, pingPongDelay, sequence }
