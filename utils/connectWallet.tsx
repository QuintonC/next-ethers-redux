// Packages
import { ethers } from 'ethers';

// Constants
import { PREFFEREDNETWORK } from 'constants/index';

// Types
declare var window: any;
export interface ConnectWalletResponse {
  address: string;
  connected: boolean;
}

// Actions
import {
  setWalletAddress,
  resetWalletReducer,
  setWalletConnected,
} from 'slices/gateSlice';

// Store
import store from 'store/configureStore';

const connectWallet = async () => {
  return new Promise<ConnectWalletResponse>(async (resolve, reject) => {
    if (window.ethereum !== undefined) {
      store.dispatch(setWalletAddress('Connecting...'));

      await window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(async (accounts: string[]) => {
          if (accounts.length === 0) {
            reject('Please connect to MetaMask');
          } else if (window.ethereum !== undefined) {
            const provider = await new ethers.providers.Web3Provider(
              window.ethereum,
            );

            const signer = await provider.getSigner();
            const walletAddress = await signer.getAddress();

            // If you need to do any contract negotiations, e.g. contract.balanceOf(walletAddress) uncomment the following
            // and utilize it where necessary.
            // Make sure to not store this in redux as this is a non-serializable and redux does not handle non-serializable data.
            // More info on this in the following links:
            // https://redux.js.org/style-guide/#do-not-put-non-serializable-values-in-state-or-actions
            // https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data
            // https://blog.bam.tech/developer-news/the-redux-best-practice-do-not-put-non-serializable-values-in-state-or-actions-explained
            //
            // const addressContract = new ethers.Contract(
            //   ContractData.ADDRESS,
            //   ContractData.ADDRESS_ABI,
            //   signer,
            // );

            const network =
              provider !== undefined ? await provider.getNetwork() : 'UNKNOWN';

            if (network === 'UNKNOWN') {
              store.dispatch(resetWalletReducer());

              reject(
                `User cancelled wallet connection, or the provider is unknown. Please try reconnecting you wallet and ensuring that you are using ${PREFFEREDNETWORK}.`,
              );
            } else if (network.name !== PREFFEREDNETWORK) {
              store.dispatch(resetWalletReducer());

              reject(
                `It looks like you are using the wrong network. Please switch to ${PREFFEREDNETWORK}.`,
              );
            } else if (walletAddress !== undefined) {
              store.dispatch(setWalletAddress(walletAddress));
              store.dispatch(setWalletConnected(true));

              resolve({ address: walletAddress, connected: true });
            } else {
              store.dispatch(resetWalletReducer());
              reject(
                'Something went wrong while attempting to connect your wallet. Please try again.',
              );
            }
          } else {
            reject('window.ethereum does not exist 😔');
          }
        })
        .catch((error: any) => {
          reject(error);
        });
    } else {
      reject('window.ethereum was undefined');
    }
  });
};

export default connectWallet;
