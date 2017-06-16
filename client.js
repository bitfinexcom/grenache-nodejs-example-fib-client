'use strict'

const { Link, PeerRPCClient }  = require('grenache-nodejs-ws')

const link = new Link({
  grape: 'http://127.0.0.1:30001',
  requestTimeout: 10000
})
link.start()

const peer = new PeerRPCClient(link, {})
peer.init()

const payload = { number: 10 }
peer.request('fibonacci_worker', payload, { timeout: 100000 }, (err, result) => {
  if (err) throw err
  console.log(
    'Fibonacci number at place',
    payload.number,
    'in the sequence:',
    result
  )
})
