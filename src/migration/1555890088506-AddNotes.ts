import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class AddNotes1555890088506 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'note',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true
          },
          {
            name: 'color',
            type: 'varchar'
          },
          {
            name: 'shape',
            type: 'varchar'
          },
          {
            name: 'midi_val',
            type: 'int'
          },
          {
            name: 'common_notation',
            type: 'varchar'
          },
          {
            name: 'svg',
            type: 'varchar'
          },
          {
            name: 'filtered',
            type: 'boolean'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('note')
  }
}
