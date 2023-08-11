import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('addresss')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':address')
  async getAddressInfo(@Param('address') address: string): Promise<string> {
    return await this.appService.getAddressInfo(address);
  }
}
