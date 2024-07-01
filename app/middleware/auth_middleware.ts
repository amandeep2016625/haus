// import type { HttpContext } from '@adonisjs/core/http'
// import type { NextFn } from '@adonisjs/core/types/http'
// import type { Authenticators } from '@adonisjs/auth/types'

// /**
//  * Auth middleware is used authenticate HTTP requests and deny
//  * access to unauthenticated users.
//  */
// // export default class AuthMiddleware {
// //   /**
// //    * The URL to redirect to, when authentication fails
// //    */
// //   redirectTo = '/login'

// //   async handle(
// //     ctx: HttpContext,
// //     next: NextFn,
// //     options: {
// //       guards?: (keyof Authenticators)[]
// //     } = {}
// //   ) {
// //     await ctx.auth.authenticateUsing(options.guards, { loginRoute: this.redirectTo })
// //     return next()
// //   }
// // }
// // import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// // 
// export default class AuthMiddleware {
//   public async handle({ auth, response }: HttpContext, next: () => Promise<void>) {
//     try {
//       await auth.use('api').authenticate()
//       await next()
//     } catch {
//       return response.unauthorized('You must be logged in to access this resource')
//     }
//   }
// }
