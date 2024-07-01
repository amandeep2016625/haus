import { DateTime } from 'luxon'
import { column,  BaseModel, hasMany,  } from '@adonisjs/lucid/orm'
import Skill from '#models/skill'
import type { HasMany } from '@adonisjs/lucid/types/relations'


export default class Student extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  // @column()
  // declare rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // @beforeSave()
  // public static async hashPassword(student: Student) {
  //   if (student.$dirty.password) {
  //     student.password = await Hash.make(student.password)
  //   }
  // }

  @hasMany(() => Skill)
  declare skills: HasMany<typeof Skill>
}
