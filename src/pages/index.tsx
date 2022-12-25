import type { NextPage } from 'next'
import { Shead } from '../common';
import { Promotion } from '../components';
import storage from '../Utils/lib/storage';

const PromotionPage: NextPage = () => {
  return (
      <>
        <Shead seoTitle={'프로모션페이지'} />
       <Promotion />
      </>
  )
}

export default PromotionPage