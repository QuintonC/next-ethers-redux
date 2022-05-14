// Packages
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

// Store
import store from 'store/configureStore';

// Style
import '../styles/globals.css';

// Types
declare var window: any;

// Actions
import { resetWalletReducer } from 'slices/gateSlice';

// Utility Functions
import { connectWallet } from 'utils';
import { usePrevious } from 'hooks';

function MyApp({ Component, pageProps }: AppProps) {
  const storeState = store.getState(),
    { walletAddress } = storeState.gate,
    previousWalletAddress = usePrevious(walletAddress);

  useEffect(() => {
    const windowEthereumWatcher = async () => {
      // Only run the following if previousWalletAddress was not empty string and
      // was not 'Connecting...' and is no longer the same as the current address
      // TODO: check this for edge cases... I wrote it at 1am 🤣
      if (window.ethereum !== undefined) {
        console.log('previousWalletAddress', previousWalletAddress);
        console.log('walletAddress', walletAddress);

        await window.ethereum.on('accountsChanged', (accounts: string[]) => {
          if (
            previousWalletAddress !== '' &&
            previousWalletAddress !== undefined &&
            previousWalletAddress !== 'Connecting...' &&
            previousWalletAddress !== walletAddress &&
            accounts.length !== 0
          ) {
            connectWallet();
          } else {
            // user disconnected their wallet
            store.dispatch(resetWalletReducer());
          }
        });
      }
    };

    windowEthereumWatcher();
  }, [walletAddress, previousWalletAddress]);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
