import type { NextPage } from 'next';

// Components
import { Layout, WalletButton } from 'components';

const Home: NextPage = () => {
  return (
    <Layout>
      <WalletButton />
    </Layout>
  );
};

export default Home;
