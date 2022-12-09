import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr';
import { RecoilRoot } from 'recoil';


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <SWRConfig>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </SWRConfig>
    </>
  )
}

export default MyApp
