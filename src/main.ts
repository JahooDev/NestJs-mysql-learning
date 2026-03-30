import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import ValidationPipeOptionsConfig from './_utils/config/validation-pipe-options.config';
import SwaggerCustomOptionsConfig from './_utils/config/swagger-custom-options.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe(ValidationPipeOptionsConfig)).enableCors();

  const config = new DocumentBuilder()
    .setTitle('My App API')
    .setDescription('API documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, SwaggerCustomOptionsConfig);
  await app.listen(3000);
}
void bootstrap();
