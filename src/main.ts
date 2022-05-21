import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

var PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
  });
  console.log("Starting on port: ", PORT)
  await app.listen(PORT);
}
bootstrap();
