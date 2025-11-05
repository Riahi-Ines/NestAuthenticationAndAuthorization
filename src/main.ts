import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Removes any properties that are not defined in your DTO.
      transform: true, //Converts incoming payloads into actual DTO class instances.
      forbidNonWhitelisted: true, //Throws error if extra properties are present.
      transformOptions: {
        enableImplicitConversion: true, //Allows automatic type conversion (e.g. "1" → 1) even if you don't explicitly use decorators like @Type(() => Number) from class-transformer.
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Tasks API')
    .setDescription('Tasks API description')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
