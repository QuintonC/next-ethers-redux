import Head from 'next/head';

// Style
import { Container } from './style';

// Types
interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const METATAG_DESC = 'METATAG DESC.';
  const METATAG_TITLE = 'Title';

  return (
    <>
      <Container style={{ minHeight: '100vh', width: '100vw' }}>
        <Head>
          <title>{METATAG_TITLE}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="title" content={METATAG_TITLE} />
          <meta name="description" content={METATAG_DESC} />
          <meta name="author" content="YOUR NAME HERE" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="" />
          <meta property="og:title" content={METATAG_TITLE} />
          <meta property="og:description" content={METATAG_DESC} />
          {/* <meta
            property="og:image"
            content=""
          /> */}

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="" />
          <meta property="twitter:title" content={METATAG_TITLE} />
          <meta property="twitter:description" content={METATAG_DESC} />
          {/* <meta
            property="twitter:image"
            content=""
          /> */}
        </Head>
        {children}
      </Container>
    </>
  );
};

export default Layout;
