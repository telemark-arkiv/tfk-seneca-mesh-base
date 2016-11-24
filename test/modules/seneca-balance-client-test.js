'use strict'

const tap = require('tap')
const balance = require('seneca-balance-client')

tap.ok(balance, 'seneca-balance-client loads ok')
