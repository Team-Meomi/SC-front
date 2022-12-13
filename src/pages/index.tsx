import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import Signup from '../components/signup'

const Home: NextPage = () => {
  const router = useRouter();
  return (
      <>
        <button onClick={() => router.push("/auth/signup")}>회원가입하는길</button>
      </>
  )
}

export default Home