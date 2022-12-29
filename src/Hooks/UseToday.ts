import { useEffect } from 'react';
 
const UseToday = () => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const todayDate = year + '-' + month  + '-' + day;
  const dayOfWeek = week[new Date(today).getDay()];
  return {todayDate, dayOfWeek}
}
export default UseToday;