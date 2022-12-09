import { destroyCookie } from 'nookies'

const UseRemoveToken = (): void => {
    destroyCookie(null, 'Authorization')
    destroyCookie(null, 'RefreshToken')
}

export default UseRemoveToken