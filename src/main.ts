import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
      .setTitle('Education API')
      .setVersion('1.0')
      .build(); // Конфигурируем сборщик документации
  const document = SwaggerModule.createDocument(app, config); // апишка
  SwaggerModule.setup('api_docs', app, document); //localhost:3001/api_docs
  await app.listen(3001);
  app.setGlobalPrefix('/api');
}
bootstrap();
