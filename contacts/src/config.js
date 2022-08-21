export const CONTACT_ADDRESS = "0xDe9a80ee71C6fedd51b387B540D75E66E5B67A39";

export const CONTACT_ABI = [
  {
    constant: true,
    inputs: [],
    name: "count",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    signature: "0x06661abd",
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "contacts",
    outputs: [
      {
        name: "id",
        type: "uint256",
      },
      {
        name: "name",
        type: "string",
      },
      {
        name: "phone",
        type: "string",
      },
    ],
    payable: false,
    signature: "0xe0f478cb",
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    signature: "constructor",
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_name",
        type: "string",
      },
      {
        name: "_phone",
        type: "string",
      },
    ],
    name: "createContact",
    outputs: [],
    payable: false,
    signature: "0x3dce4920",
    stateMutability: "nonpayable",
    type: "function",
  },
];
