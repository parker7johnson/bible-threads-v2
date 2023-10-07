/* eslint-disable @typescript-eslint/no-var-requires */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
var serviceAccount = require('../serviceAccount.json')
async function bootstrap() {
  admin.initializeApp({
    credential : admin.credential.cert(serviceAccount)
  });
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();