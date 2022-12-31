import { destroyCookie } from 'nookies'

const useRemoveToken = (): void => {
    destroyCookie(null, 'Authorization');
    destroyCookie(null, 'RefreshToken');   
}

export default useRemoveToken