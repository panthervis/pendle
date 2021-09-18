/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { GasTesting } from "../GasTesting";

export class GasTesting__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GasTesting> {
    return super.deploy(overrides || {}) as Promise<GasTesting>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GasTesting {
    return super.attach(address) as GasTesting;
  }
  connect(signer: Signer): GasTesting__factory {
    return super.connect(signer) as GasTesting__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GasTesting {
    return new Contract(address, _abi, signerOrProvider) as GasTesting;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "times",
        type: "uint256",
      },
    ],
    name: "change128",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "times",
        type: "uint256",
      },
    ],
    name: "change256",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "times",
        type: "uint256",
      },
    ],
    name: "change32",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610178806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806398a7bd9e14610046578063d3ddef951461005b578063fa97495e1461006e575b600080fd5b61005961005436600461012a565b610081565b005b61005961006936600461012a565b6100d2565b61005961007c36600461012a565b610106565b60005b818110156100ce57600081815260016020819052604090912080546fffffffffffffffffffffffffffffffff1916426fffffffffffffffffffffffffffffffff1617905501610084565b5050565b60005b818110156100ce576000818152600260205260409020805463ffffffff19164263ffffffff161790556001016100d5565b60005b818110156100ce576000818152602081905260409020429055600101610109565b60006020828403121561013b578081fd5b503591905056fea2646970667358221220f1c4cc648d60850bc789cf211d2d74553bd3441d3a9935ed755456299da5a04664736f6c63430007060033";