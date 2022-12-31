import {NextRequest,NextResponse,userAgent} from "next/server";
import { RoleType } from "./types";
import jwt from 'jwt-decode';

export const middleware = async (req:NextRequest) => {
  const RefreshToken =  req.cookies.get('RefreshToken')
  const ua = userAgent(req); 
  const user:RoleType = jwt(RefreshToken || "");
  
	if (user.auth[0] === 'ROLE_ADMIN' && req.nextUrl.pathname !== '/admin') {
    return NextResponse.redirect(new URL('/admin', req.url))
  }
	else if (user.auth[0] === 'ROLE_USER' && req.nextUrl.pathname === '/admin') {
    return NextResponse.redirect(new URL('/home', req.url))
  }

  if (!RefreshToken) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  if (ua.isBot) {
    return NextResponse.redirect(new URL('/', req.url))
  }
}

export const config = {
  matcher: ['/home', '/create', '/study/(.*)', '/user/(.*)', '/admin' ],
};