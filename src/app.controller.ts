import { Controller, Get, Param } from '@nestjs/common';
import { AppService2 } from './app.service_nft';
import { AppService } from './app.service';

@Controller('contracts')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':address')
  async getAddressInfo(@Param('address') address: string): Promise<string> {
    return await this.appService.getAddressInfo(address);
  }
}

@Controller('nfts')
export class AppController2 {
  constructor(private readonly appService2: AppService2) {}

  @Get(':address')
  async getAddressInfo2(@Param('address') address: string): Promise<string> {
    return await this.appService2.getAddressInfo2(address);
  }
}