import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

private users = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }];

    getUsers() {
        return this.users;
    }
}
