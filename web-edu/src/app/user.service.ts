import { Injectable } from '@angular/core';
import { User } from './user';

const users = [
  {
    id:1,
    username:'loginuser',
    password:'admin123',
  },
  {
    id:2,
    username:'loginuser1',
    password:'admin321',
  }
]
@Injectable()
export class UserService {

  constructor() { }

}
