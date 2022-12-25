import { parseCookies } from 'nookies'

const UseGetTokenDom = () => {
    const {Authorization,RefreshToken} = parseCookies()
    return { Authorization , RefreshToken }
}

export default UseGetTokenDom