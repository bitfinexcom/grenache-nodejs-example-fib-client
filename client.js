'use strict'

const { Link, PeerRPCClient }  = require('grenache-nodejs-ws')

const link = new Link({
  grape: 'ws://127.0.0.1:30001'
})
link.start()

const peer = new PeerRPCClient(link, {})
peer.init()

link.on('connect', () => {
  const payload = { number: 10 }

  peer.request('fibonacci_worker', payload, { timeout: 10000 }, (err, result) => {
    if (err) throw err
    console.log(
      'Fibonacci number at place',
      payload.number,
      'in the sequence:',
      result
    )
  })
})
