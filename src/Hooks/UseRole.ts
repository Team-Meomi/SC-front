import jwt from 'jwt-decode';
import { RoleType } from '../types';
import UseGetToken from './UseGetToken';

const UseRole = async () => {
    const {Authorization} = await UseGetToken(null)
    const user:RoleType = jwt(Authorization ?? '');
    console.log(user);
	if (user.auth[0] === 'USER') return 'user';
	else if (user.auth[0] === 'ADMIN') return 'admin';
	else return '';
};

export default UseRole