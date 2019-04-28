import 'reflect-metadata'
import noteBank from './Note'
import { Note } from '../entity/Note'
import { createConnection } from 'typeorm'

createConnection({
  type: 'postgres',
  url: process.env.DATABASE_URL || 'postgres://localhost:5432/notes_db',
  synchronize: true,
  entities: [Note]
})
  .then(async connection => {
    for (let note of noteBank) {
      const insertNote = new Note()
      insertNote.color = note.color
      insertNote.shape = note.shape
      insertNote.midi_val = note.midi_val
      insertNote.common_notation = note.common_notaion
      insertNote.svg = note.svg
      insertNote.filtered = note.filtered

      await connection.manager.save(insertNote)
    }
  })
  .catch(error => console.log(error))
