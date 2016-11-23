'use strict'

var Seneca = require('seneca')
var Mesh = require('seneca-mesh')
var envs = process.env
var options = {
  seneca: {
    tag: envs.TFK_SENECA_MESH_BASE_TAG || 'tfk-seneca-mesh-base'
  },
  mesh: {
    base: true,
    host: envs.TFK_SENECA_MESH_BASE_HOST || '127.0.0.1'
  }
}

Seneca(options.seneca)
  .use(Mesh, options.mesh)
