import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, belongsTo } from '@adonisjs/lucid/orm'
import Student from '#models/student'

export default class Skill extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string
  @column()
  declare studentId:number

  

  // @column.dateTime({ autoCreate: true })
  // declare createdAt: DateTime

  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // declare updatedAt: DateTime

  @belongsTo(() => Student)
  declare student: BelongsTo<typeof Student>
}
