import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))

  const config = new DocumentBuilder().setTitle('Backend').setDescription('The full stack Web-Application API description').setVersion('1.0').build()
  const document = SwaggerModule.createDocument(app, config)
  app.enableCors()
  SwaggerModule.setup('api', app, document)

  await app.listen(3000)
}

bootstrap()
