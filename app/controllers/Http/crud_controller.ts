import User from '#models/student'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async store({ request, response }: HttpContext) {
    const body = request.body()
    console.log(body.name);
    console.log("i am hit");
    const data = await User.create(body)

    response.status(201)

    return {
      msg: 'created',
      data: data,
    }
  }

  async index() {
    const data = await User.all()

    return {
      msg: ' Student data ',
      data: data,
    }
  }
  async show({ params }: HttpContext) {
    const data = await User.find(params.id)

    return {
      data: data,
    }
  }
  async destroy({ params }: HttpContext) {
    const data = await User.findOrFail(params.id)
    await data.delete()

    return {
      msg: 'deleted  ',
      data: data,
    }
  }
  async update({ params, request }: HttpContext) {
    const user = await User.findOrFail(params.id)

    const body = request.body()

    user.name=body.name
    user.email = body.email
    user.password = body.password

    await user.save()

    return {
      message: 'updated',
      data: user,
    }
  }
}
