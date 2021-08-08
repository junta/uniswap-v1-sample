/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Token } from "../Token";

export class Token__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    overrides?: Overrides
  ): Promise<Token> {
    return super.deploy(
      name,
      symbol,
      initialSupply,
      overrides || {}
    ) as Promise<Token>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initialSupply,
      overrides || {}
    );
  }
  attach(address: string): Token {
    return super.attach(address) as Token;
  }
  connect(signer: Signer): Token__factory {
    return super.connect(signer) as Token__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token {
    return new Contract(address, _abi, signerOrProvider) as Token;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSymbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000ddd38038062000ddd8339810160408190526200003491620002b9565b8251839083906200004d90600390602085019062000168565b5080516200006390600490602084019062000168565b5050506200007833826200008160201b60201c565b505050620003e1565b6001600160a01b038216620000b35760405162461bcd60e51b8152600401620000aa9062000329565b60405180910390fd5b620000c16000838362000163565b8060026000828254620000d5919062000369565b90915550506001600160a01b038216600090815260208190526040812080548392906200010490849062000369565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906200014990859062000360565b60405180910390a36200015f6000838362000163565b5050565b505050565b82805462000176906200038e565b90600052602060002090601f0160209004810192826200019a5760008555620001e5565b82601f10620001b557805160ff1916838001178555620001e5565b82800160010185558215620001e5579182015b82811115620001e5578251825591602001919060010190620001c8565b50620001f3929150620001f7565b5090565b5b80821115620001f35760008155600101620001f8565b600082601f8301126200021f578081fd5b81516001600160401b03808211156200023c576200023c620003cb565b6040516020601f8401601f1916820181018381118382101715620002645762000264620003cb565b60405283825285840181018710156200027b578485fd5b8492505b838310156200029e57858301810151828401820152918201916200027f565b83831115620002af57848185840101525b5095945050505050565b600080600060608486031215620002ce578283fd5b83516001600160401b0380821115620002e5578485fd5b620002f3878388016200020e565b9450602086015191508082111562000309578384fd5b5062000318868287016200020e565b925050604084015190509250925092565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b600082198211156200038957634e487b7160e01b81526011600452602481fd5b500190565b600281046001821680620003a357607f821691505b60208210811415620003c557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6109ec80620003f16000396000f3fe608060405234801561001057600080fd5b50600436106100af5760003560e01c806306fdde03146100b4578063095ea7b3146100d257806315070401146100f257806318160ddd146100fa57806323b872dd1461010f578063313ce5671461012257806339509351146101375780636c9c2faf1461014a57806370a082311461015257806395d89b4114610165578063a457c2d71461016d578063a9059cbb14610180578063dd62ed3e14610193575b600080fd5b6100bc6101a6565b6040516100c9919061070c565b60405180910390f35b6100e56100e03660046106d8565b610238565b6040516100c99190610701565b6100bc610255565b610102610264565b6040516100c99190610940565b6100e561011d36600461069d565b61026a565b61012a610303565b6040516100c99190610949565b6100e56101453660046106d8565b610308565b61010261035c565b61010261016036600461064a565b610366565b6100bc610385565b6100e561017b3660046106d8565b610394565b6100e561018e3660046106d8565b61040d565b6101026101a136600461066b565b610421565b6060600380546101b59061097b565b80601f01602080910402602001604051908101604052809291908181526020018280546101e19061097b565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b5050505050905090565b600061024c61024561044c565b8484610450565b50600192915050565b606061025f610385565b905090565b60025490565b6000610277848484610504565b6001600160a01b03841660009081526001602052604081208161029861044c565b6001600160a01b03166001600160a01b03168152602001908152602001600020549050828110156102e45760405162461bcd60e51b81526004016102db9061082a565b60405180910390fd5b6102f8856102f061044c565b858403610450565b506001949350505050565b601290565b600061024c61031561044c565b84846001600061032361044c565b6001600160a01b03908116825260208083019390935260409182016000908120918b16815292529020546103579190610957565b610450565b600061025f610264565b6001600160a01b0381166000908152602081905260409020545b919050565b6060600480546101b59061097b565b600080600160006103a361044c565b6001600160a01b03908116825260208083019390935260409182016000908120918816815292529020549050828110156103ef5760405162461bcd60e51b81526004016102db906108fb565b6104036103fa61044c565b85858403610450565b5060019392505050565b600061024c61041a61044c565b8484610504565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166104765760405162461bcd60e51b81526004016102db906108b7565b6001600160a01b03821661049c5760405162461bcd60e51b81526004016102db906107a2565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906104f7908590610940565b60405180910390a3505050565b6001600160a01b03831661052a5760405162461bcd60e51b81526004016102db90610872565b6001600160a01b0382166105505760405162461bcd60e51b81526004016102db9061075f565b61055b83838361062e565b6001600160a01b038316600090815260208190526040902054818110156105945760405162461bcd60e51b81526004016102db906107e4565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906105cb908490610957565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516106159190610940565b60405180910390a361062884848461062e565b50505050565b505050565b80356001600160a01b038116811461038057600080fd5b60006020828403121561065b578081fd5b61066482610633565b9392505050565b6000806040838503121561067d578081fd5b61068683610633565b915061069460208401610633565b90509250929050565b6000806000606084860312156106b1578081fd5b6106ba84610633565b92506106c860208501610633565b9150604084013590509250925092565b600080604083850312156106ea578182fd5b6106f383610633565b946020939093013593505050565b901515815260200190565b6000602080835283518082850152825b818110156107385785810183015185820160400152820161071c565b818111156107495783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b60208082526028908201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616040820152676c6c6f77616e636560c01b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b90815260200190565b60ff91909116815260200190565b6000821982111561097657634e487b7160e01b81526011600452602481fd5b500190565b60028104600182168061098f57607f821691505b602082108114156109b057634e487b7160e01b600052602260045260246000fd5b5091905056fea264697066735822122067dfca7f74adc349771c27d9784da5661274a994f7c4d27a9cb6fe584588023c64736f6c63430008000033";
