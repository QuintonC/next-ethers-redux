import { useEffect, useState } from 'react';

// Style
import { Button, ButtonText } from './style';

// Custom Hooks
import { useAppSelector } from 'hooks';

// Utility Functions
import { connectWallet } from 'utils';

const WalletButton = () => {
  const [mounted, setMounted] = useState(false);

  const { walletAddress, walletConnected } = useAppSelector(
    state => state.gate,
  );

  const handleWalletButtonClick = async () => {
    await connectWallet()
      .then(response => console.log('response', response))
      .catch(error => console.error('error', error));
  };

  useEffect(() => setMounted(true), []);

  return mounted ? (
    <Button onClick={handleWalletButtonClick}>
      <ButtonText>
        {walletConnected || walletAddress !== ''
          ? walletAddress
          : 'Connect Wallet'}
      </ButtonText>
    </Button>
  ) : null;
};
export default WalletButton;
