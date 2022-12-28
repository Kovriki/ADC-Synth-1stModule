const channel = {
  volume: -20,
  mute: false
}

const sequence = {
  steps: [
    {
      time: '0:0:0',
      noteName: 'A2',
      duration: '1n',
      velocity: 0.6
    },
    {
      time: '1:0:0',
      noteName: 'A1',
      duration: '4n',
      velocity: 0.6
    },
    {
      time: '3:0:0',
      noteName: 'A1',
      duration: '1n',
      velocity: 0.6
    },
    {
      time: '7:3:0',
      noteName: 'A1',
      duration: '1n',
      velocity: 0.6
    }

  ],
  duration: '10m',
  loop: true
}

export { channel, sequence }
