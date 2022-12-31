import jwt from 'jwt-decode';
import { RoleType } from '../types';
import UseGetToken from './UseGetToken';

const UseRole = async () => {
    const {Authorization} = await UseGetToken(null)
	if(!Authorization) return "";
    const user:RoleType = jwt(Authorization);
	if (user.auth[0] === 'ROLE_USER') return 'user';
	else if (user.auth[0] === 'ROLE_ADMIN') return 'admin';
};

export default UseRole