import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={ ChainId.Goerli }
      chainRpc={{
        [ChainId.Goerli]:'https://goerli.infura.io/v3/333d22ce307148eeac2420c32a12c4e2'
      }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
  
}

export default MyApp
