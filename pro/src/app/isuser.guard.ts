import { CanActivateFn } from '@angular/router';

export const isuserGuard: CanActivateFn = (route, state) => {
  const userJson = localStorage.getItem('user');
  if(userJson)
  return true;
return false;
};
