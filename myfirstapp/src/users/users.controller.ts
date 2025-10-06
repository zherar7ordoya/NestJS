/*
Cuando hablamos de controladores, solamente estamos hablando
de funciones que se van a llamar cuando una ruta sea visitada.
*/

import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {

constructor(private usersService: UsersService) {}

    @Get('/users')
    getUsers() {
        return this.usersService.getUsers();
    }
}
