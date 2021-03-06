import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3300;
  await app.listen(port);
  console.log("Listen on port: " + port)
}
bootstrap();
