export * from './decorator'
export * from './register'
import { Router } from 'express'
import { RegisterService } from './register'

export class BaseController {
  static register (app: Express.Application) {
    RegisterService(app, [this])
    return app
  }
}