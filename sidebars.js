module.exports = {
  docs: [
    {
      type: "category",
      label: "Introduction",
      items: [
        "introduction/introduction",
        "introduction/contributing",
        "introduction/wallets",
        "introduction/dapps",
        "introduction/security-audit",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting-started/installation",
        "getting-started/first-dapp",
        "getting-started/simple-example",
        "getting-started/advanced-example",
        "getting-started/high-performance",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "guides/active-account",
        "guides/disconnecting-a-wallet",
        "guides/network",
        "guides/request-permissions",
        "guides/sign-payload",
        "guides/broadcast-request",
        "guides/simple-contract-call",
        "guides/fa1.2-transfer",
        "guides/fa2-transfer",
        "guides/contract-error-handling",
        "guides/subscribe-to-event",
        "guides/standalone-delegation",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Advanced",
      items: [
        "advanced/ui-elements",
        "advanced/custom-block-explorer",
        "advanced/different-node",
        "advanced/debug-wallet",
        "advanced/sdk-info",
        {
          type: "category",
          label: "Flows",
          items: [
            "advanced/flows/connection",
            "advanced/flows/extension-communication",
            "advanced/flows/ledger-extension",
            "advanced/flows/local-mnemonic",
            "advanced/flows/p2p-direct",
            "advanced/flows/p2p-extension",
          ],
          collapsed: true,
        },
      ],
      collapsed: true,
    },
    "CHANGELOG",
    "post-mortem",
    {
      type: "link",
      label: "TypeDoc Reference",
      href: "https://typedocs.walletbeacon.io",
    },
  ],
  wallet: [
    {
      type: "category",
      label: "Getting Started",
      items: [
        {
          type: "category",
          label: "Web",
          items: ["wallet/getting-started/web/getting-started"],
          collapsed: true,
        },
        {
          type: "category",
          label: "Android",
          items: [
            "wallet/getting-started/android/installation",
            "wallet/getting-started/android/connect-to-dapp",
            "wallet/getting-started/android/disconnect-from-dapp",
          ],
          collapsed: true,
        },
        {
          type: "category",
          label: "iOS",
          items: ["wallet/getting-started/ios/installation"],
          collapsed: true,
        },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Advanced",
      items: [
        {
          type: "category",
          label: "Android",
          items: [
            "wallet/advanced/android/configuration",
            "wallet/advanced/android/coroutines-alternatives",
          ],
          collapsed: true,
        },
        {
          type: "category",
          label: "iOS",
          items: [],
          collapsed: true,
        },
      ],
      collapsed: false,
    },
    "wallet/security",
  ],
};
