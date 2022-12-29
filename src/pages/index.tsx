import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Shead } from '../common';
import { Promotion } from '../components';
import { UseGetToken } from '../Hooks';

const PromotionPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const a = async() => {
      const {RefreshToken} = await UseGetToken(null)
      if(RefreshToken){
        router.push('/home');
      }
    }
    a();
  },[])
  return (
      <>
        <Shead seoTitle={'프로모션페이지'} />
       <Promotion />
      </>
  )
}

export default PromotionPage