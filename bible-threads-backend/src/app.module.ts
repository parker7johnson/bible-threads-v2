import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
@Module({
  imports: [
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
