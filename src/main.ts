import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as polygonScanApi from 'polygonscan-api';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  polygonScanApi.init(process.env.POLYGONSCAN_KEY);
}

bootstrap();
