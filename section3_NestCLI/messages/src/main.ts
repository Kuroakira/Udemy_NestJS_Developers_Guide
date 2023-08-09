import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  await app.listen(3000);
}
bootstrap();
