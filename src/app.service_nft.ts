import { Injectable } from '@nestjs/common';
import { Alchemy, AssetTransfersCategory, Network } from 'alchemy-sdk';

@Injectable()
export class AppService2 {
  alchemy: Alchemy;

  config = {
    apiKey:  process.env.ALCHEMY_SDK,
    network: Network.MATIC_MUMBAI,
  };

  constructor() {
    this.alchemy = new Alchemy(this.config);
  }

  async getAddressInfo2(address: string): Promise<string> {
    let owner  = address;

    let response = await this.alchemy.nft.getNftsForOwner(owner)

    const nfts = response.totalCount;
    //let nfts = "";

    const result = {
      'NumberOfNFTs' : nfts,
    }
    return JSON.stringify(result);
  }
}
