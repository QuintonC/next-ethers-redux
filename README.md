# Next.js + Redux + Ethers.js

The intent of this sample application is to  provide a demonstration of how to connect a wallet to a Next.js application.

It includes Redux via [Redux Toolkit](https://redux-toolkit.js.org/) while also leveraging Redux Persist to ensure that the user's connection status maintains across application sessions. Additionally, you will find that the app listens for the wallet account to change and appropriately reflects the update to the UI.

## Usage

To use this template to query any contracts, you will first need to modify a few things:

* Open `constants/index.tsx`
    * Populate `MAIN_NET_ADDRESS` or `TEST_NET_ADDRESS` with the appropriate contract address.
    * Populate `MAIN_NET_ABI` or `TEST_NET_ABI` with the appropriate contract ABI in order to allow for any contract queries to take place.
    * This will be used in `utils/connectWallet.tsx` on line 50 where `addressContract` is currently commented out.

## Running the application

* Ensure that you have run one of the following commands:
```bash
npm install
# or
yarn install
```

* To run the application, run one of the following commands:

```bash
npm run dev
# or
yarn dev
```

* Open [http://localhost:3000](http://localhost:3000) with your browser to see the application
