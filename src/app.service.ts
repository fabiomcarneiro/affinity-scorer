import { Injectable } from '@nestjs/common';
import * as polygonScanApi from 'polygonscan-api';

@Injectable()
export class AppService {
  async getAddressInfo(address: string): Promise<string> {
    const balance = await polygonScanApi.account.balance(address);
    return balance;
  }
}
