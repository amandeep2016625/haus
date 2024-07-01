import skill from '#models/skill'
import { HttpContext } from '@adonisjs/core/http'

export default class BlogController {
  async store({ request, response }: HttpContext) {
    const body = request.body()

    const data = await skill.create(body)

    response.status(201)

    return {
      msg: 'skill added',
      data: data,
    }
  }

  async index() {
    const data = await skill.all()

    return {
      message: 'All skill data',
      data: data,
    }
  }
  async show({ params }: HttpContext) {
    const data = await skill.find(params.id)

    return {
      data: data,
    }
  }
  async destroy({ params }: HttpContext) {
    const data = await skill.findOrFail(params.id)
    await data.delete()

    return {
      message: 'skill deleted ',
      data: data,
    }
  }
  
  async update({ params, request }: HttpContext) {
    const data = await skill.findOrFail(params.id)

    const body = request.body()

    data.name = body.name
    data.studentId = body.studentId
    

    await data.save()

    return {
      msg: 'skill data updated ',
      data: skill,
    }
  }
}
