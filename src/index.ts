import 'reflect-metadata'
import dotenv from 'dotenv'
import { createExpressServer } from 'routing-controllers'
import { controllers } from './controllers/controllers'

function bootstrap() {
  dotenv.config()

  const app = createExpressServer({
    controllers: controllers,
    cors: true,
  })

  const PORT: number = Number(process.env.PORT) || 3000
  const HOST: string = process.env.HOST || 'localhost'

  app.listen(PORT)
}

bootstrap()
