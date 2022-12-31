import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { useEffect } from 'react';
import { Shead } from '../common';
import { Promotion } from '../components';

const PromotionPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const {RefreshToken} = parseCookies()
      if(RefreshToken){
        router.push('/home');
      }
  },[])
  return (
      <>
        <Shead seoTitle={'프로모션페이지'} />
       <Promotion />
      </>
  )
}

export default PromotionPage  