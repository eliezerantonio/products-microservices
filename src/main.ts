import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { env } from './config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger("Main")
  app.useGlobalPipes(new ValidationPipe({whitelist:true, forbidNonWhitelisted: true}))
  await app.listen(env.port);

  logger.log(`App running on port ${env.port}`)

}
bootstrap();
