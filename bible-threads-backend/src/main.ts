import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin'
const serviceAccount = require('../serviceAccount.json')

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors : true,
  });
  // app.enableCors()
  admin.initializeApp({
    credential : admin.credential.cert(serviceAccount)
  });
  await app.listen(3000);
}
bootstrap();
