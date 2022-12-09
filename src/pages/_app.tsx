import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr';
import { RecoilRoot } from 'recoil';
import CustomAxios from '../Utils/lib/CustomAxios';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <SWRConfig 
        value={{
          fetcher :(url:string) => 
          CustomAxios.get(url).then((response) => response.data),
        }}
      >
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </SWRConfig>
    </>
  )
}

export default MyApp
