import { Module } from '@nestjs/common';
import { AppController,AppController2 } from './app.controller';
import { AppService } from './app.service';
import { AppService2 } from './app.service_nft';

@Module({
  imports: [],
  controllers: [AppController,AppController2],
  providers: [AppService, AppService2],
})
export class AppModule {}
