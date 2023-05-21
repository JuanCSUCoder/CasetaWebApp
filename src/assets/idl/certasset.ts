import anchor from "@coral-xyz/anchor"

const certasset_idl: anchor.Idl = {
  version: "0.1.0",
  name: "certasset",
  instructions: [
    {
      name: "ping",
      docs: ["Used for testing purposes"],
      accounts: [],
      args: [],
    },
    {
      name: "createRequest",
      docs: ["Allows the user to create a certification request"],
      accounts: [
        {
          name: "request",
          isMut: true,
          isSigner: true,
        },
        {
          name: "applicant",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "authority",
          type: "publicKey",
        },
        {
          name: "uri",
          type: "string",
        },
      ],
    },
    {
      name: "signCertificate",
      docs: ["Allows the Signer Authority to Sign a Certification Request"],
      accounts: [
        {
          name: "request",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenProgram2022",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "SigningRequest",
      type: {
        kind: "struct",
        fields: [
          {
            name: "applicant",
            type: "publicKey",
          },
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "uri",
            type: "string",
          },
          {
            name: "signed",
            type: "bool",
          },
          {
            name: "bump",
            type: "u8",
          },
        ],
      },
    },
  ],
  metadata: {
    address: "spxGCXzMEKBuYAsCd5wcAUD2mz8745cYZD9D8xXVgtg",
  },
};
