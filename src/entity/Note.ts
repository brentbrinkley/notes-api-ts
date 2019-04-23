import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  color: string

  @Column()
  shape: string

  @Column()
  midi_val: number

  @Column()
  common_notation: string

  @Column()
  svg: string

  @Column()
  filtered: boolean
}
