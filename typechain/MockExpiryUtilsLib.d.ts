/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MockExpiryUtilsLibInterface extends ethers.utils.Interface {
  functions: {
    "concat(string,string,uint256,string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "concat",
    values: [string, string, BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "concat", data: BytesLike): Result;

  events: {};
}

export class MockExpiryUtilsLib extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MockExpiryUtilsLibInterface;

  functions: {
    concat(
      _bt: string,
      _yt: string,
      _expiry: BigNumberish,
      _delimiter: string,
      overrides?: CallOverrides
    ): Promise<[string] & { result: string }>;

    "concat(string,string,uint256,string)"(
      _bt: string,
      _yt: string,
      _expiry: BigNumberish,
      _delimiter: string,
      overrides?: CallOverrides
    ): Promise<[string] & { result: string }>;
  };

  concat(
    _bt: string,
    _yt: string,
    _expiry: BigNumberish,
    _delimiter: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "concat(string,string,uint256,string)"(
    _bt: string,
    _yt: string,
    _expiry: BigNumberish,
    _delimiter: string,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    concat(
      _bt: string,
      _yt: string,
      _expiry: BigNumberish,
      _delimiter: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "concat(string,string,uint256,string)"(
      _bt: string,
      _yt: string,
      _expiry: BigNumberish,
      _delimiter: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    concat(
      _bt: string,
      _yt: string,
      _expiry: BigNumberish,
      _delimiter: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "concat(string,string,uint256,string)"(
      _bt: string,
      _yt: string,
      _expiry: BigNumberish,
      _delimiter: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    concat(
      _bt: string,
      _yt: string,
      _expiry: BigNumberish,
      _delimiter: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "concat(string,string,uint256,string)"(
      _bt: string,
      _yt: string,
      _expiry: BigNumberish,
      _delimiter: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}