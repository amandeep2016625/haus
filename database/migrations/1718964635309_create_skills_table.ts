import {BaseSchema} from '@adonisjs/lucid/schema'

export default class Skills extends BaseSchema {
  protected tableName = 'skills'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('student_id').unsigned().references('students.id')
      table.string('name').notNullable()
      // table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
