import fp from 'fastify-plugin'
import { Server, ClientRequest, ServerResponse } from 'http'

export default fp<Server, ClientRequest, ServerResponse, any>(function stargate(
  fastify,
  opts,
  next,
) {
  fastify.addHook()
  const methods = {
    addProtected(route, opts) {},
    addUnprotected(route) {},
  }
  fastify.decorate('stargate', methods)
  next()
})
