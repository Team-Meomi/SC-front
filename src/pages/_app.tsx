import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr';
import { RecoilRoot } from 'recoil';
import CustomAxios from '../Utils/lib/CustomAxios';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from '../styles/global';


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <SWRConfig 
        value={{ 
          fetcher :(url:string) =>
          CustomAxios.get(url).then((response) => response.data),
          revalidateIfStale: true,
          revalidateOnFocus: true,
          revalidateOnReconnect: false
        }}
      >
        <RecoilRoot>
          <GlobalStyle/>
          <Component {...pageProps} />
          <ToastContainer autoClose={1000} pauseOnHover={true} hideProgressBar={true}/>
        </RecoilRoot>
      </SWRConfig>
    </>
  )
}

export default MyApp
