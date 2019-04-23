import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Note } from './entity/Note'
import * as express from 'express'
import * as cors from 'cors'

createConnection()
  .then(async connection => {
    const app = express()

    const note = connection.getRepository(Note)
    const allNotes = await note.find({ order: { id: 'ASC' } })

    app.use(cors())
    app.get('/', (_req, res) => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(allNotes))
    })

    app.listen(3000, () => console.log('listening on 3000'))
  })
  .catch(error => console.log(error))
