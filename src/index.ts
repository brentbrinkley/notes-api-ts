import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Note } from './entity/Note'
import * as express from 'express'
import * as cors from 'cors'
import * as morgan from 'morgan'
import 'dotenv/config'

const { PORT, NODE_ENV } = process.env

createConnection({
  type: 'postgres',
  url: process.env.DATABASE_URL || 'postgres://localhost:5432/notes_db',
  synchronize: true,
  entities: [Note]
})
  .then(async connection => {
    const app = express()

    /**
     * call to database
     */
    const note = connection.getRepository(Note)
    const allNotes = await note.find({ order: { id: 'ASC' } })

    /**
     * middlewares
     */
    if (NODE_ENV !== 'production') {
      app.use(cors())
    }
    app.use(
      morgan(':method :url :status :res[content-length] - :response-time ms')
    )

    /**
     * Routes
     */
    app.get('/', (_req, res) => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(allNotes))
    })

    /**
     * server
     */
    app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))
  })
  .catch(error => console.log(error))
