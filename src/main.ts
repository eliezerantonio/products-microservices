import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { env } from './config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({whitelist:true, forbidNonWhitelisted: true}))
  await app.listen(env.port);

  console.log(`App running on port ${env.port}`)

}
bootstrap();
