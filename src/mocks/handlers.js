import { rest } from 'msw'
import clients from '../data/clients'

export const handlers = [
  rest.get('https://backend.dev/clients/:cid', (req, res, ctx) => {
    const cid = req.params.pid.toUpperCase()
    const data = clients[cid]

    if (typeof data === 'undefined') {
      return res(ctx.status(404))
    }

    return res(ctx.json({ cid, ...data }))
  })
]