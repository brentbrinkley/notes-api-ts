import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Note } from './entity/Note'
import * as express from 'express'
import * as cors from 'cors'
import * as morgan from 'morgan'

createConnection()
  .then(async connection => {
    const app = express()

    // call to database
    const note = connection.getRepository(Note)
    const allNotes = await note.find({ order: { id: 'ASC' } })

    // middlewares
    app.use(cors())
    app.use(
      morgan(':method :url :status :res[content-length] - :response-time ms')
    )

    // Routes
    app.get('/', (_req, res) => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(allNotes))
    })

    // server
    app.listen(3000, () => console.log('listening on 3000'))
  })
  .catch(error => console.log(error))
