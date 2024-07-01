import Skill from '#models/skill'
import Student from '#models/student'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Student.createMany([{"name":"amandeep","email":"amandeep@gmail.com",
      "password":"amandeep"
    },{
      "name":"rocky",
      "email":"rocky@gmail.com",
      "password":"rocky"
    }])
  }
}

await Skill.createMany([{"studentId":2 ,"name":"maths"},{"studentId":3,
  "name":"english"
}])