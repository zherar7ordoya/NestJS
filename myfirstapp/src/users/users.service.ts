import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    private users: CreateUserDto[] = [
        { id: 1, username: 'JohnDoe', password: 'password1', email: 'john@example.com', age: 30 },
        { id: 2, username: 'JaneSmith', password: 'password2', email: 'jane@example.com', age: 25 }
    ];

    getUsers() {
        return this.users;
    }

    createUser(user: CreateUserDto) {
        this.users.push({ ...user, id: this.users.length + 1  });
        return user;
    }
}
