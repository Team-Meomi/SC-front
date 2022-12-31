import type { NextPage } from 'next'
import { useEffect } from 'react';
import { Shead } from '../common';
import { Promotion } from '../components';
import { UseRoleDirect } from '../Hooks';

const PromotionPage: NextPage = () => {
  const onRoleDirect = UseRoleDirect()
  useEffect(() => {
    onRoleDirect();
  },[])
  return (
      <>
        <Shead seoTitle={'프로모션페이지'} />
       <Promotion />
      </>
  )
}

export default PromotionPage;