import { Injectable } from '@nestjs/common';
import { Alchemy, AssetTransfersCategory, Network } from 'alchemy-sdk';
import Web3 from 'web3';
const fs = require('fs');
const path = require('path');

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
      'NFTAffinityScore': 80
    }

    const rpcURL = 'https://rpc.eu-north-1.gateway.fm/v4/polygon/non-archival/mumbai';
    const web3 = new Web3(rpcURL);

    async function callSmartContract() {
      try {
        const contractABI = require('../../felang/output/AffinityScorer/AffinityScorer_abi.json');
        const contractAddress = '0x48Ba62fbce0127d831e1a9518cdB531350f7B4f7'; 
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        const addr = '0x718Ac9e6311546Cd7aa0FaF5f350B1cDAe5a53e2';
        const result = await contract.methods.get_msg().call();
        
        console.log('Call result:', result);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    //callSmartContract();

    return JSON.stringify(result);
  }
}
