import { Injectable } from '@nestjs/common';
import { Alchemy, AssetTransfersCategory, Network } from 'alchemy-sdk';

@Injectable()
export class AppService {
  alchemy: Alchemy;

  config = {
    apiKey:  process.env.ALCHEMY_SDK,
    network: Network.MATIC_MUMBAI,
  };

  constructor() {
    this.alchemy = new Alchemy(this.config);
  }

  async getAddressInfo(address: string): Promise<string> {
    const data = await this.alchemy.core.getAssetTransfers({
      fromBlock: "0x0",
      fromAddress: address,
      excludeZeroValue: false,
      withMetadata: false,
      category: [AssetTransfersCategory.EXTERNAL, ],
    });

    const transactionsNullAddress = data.transfers.filter((transfer) => transfer.to == null || transfer.to == undefined);

    const result = {
      'NR_TRANSACTIONS' : transactionsNullAddress.length,
      'SmartContractAffinityScore': 80
    }
    return JSON.stringify(result);
  }
}
