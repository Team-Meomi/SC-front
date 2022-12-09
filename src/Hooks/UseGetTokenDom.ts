import { parseCookies } from 'nookies'

const UseGeTokenDocument = () => {
    const {Authorization,RefreshToken} = parseCookies()
    return { Authorization , RefreshToken }
}

export default UseGeTokenDocument