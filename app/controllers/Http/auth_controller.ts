// import type { HttpContext } from '@adonisjs/core/http'


// import User from '#models/user'

// export default class AuthController {
//   // Register a new user
//   public async register({ request, response }: HttpContext) {
//     const data = request.only(['email', 'password'])
//     const user = await User.create(data)
//     return response.created(user)
//   }

//   // Login a user
//   public async login({ request, auth, response }: HttpContext) {
//     const { email, password } = request.only(['email', 'password'])
//     try {
//       const token = await auth.use('api').attempt(email, password)
//       return token
//     } catch {
//       return response.unauthorized('Invalid credentials')
//     }
//   }
// }
