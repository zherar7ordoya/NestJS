/*
Cuando hablamos de controladores, solamente estamos hablando
de funciones que se van a llamar cuando una ruta sea visitada.
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Get('users')
    getUsers() {
        return this.usersService.getUsers();
    }

    @Post('users')
    createUser(@Body() user: CreateUserDto) {
        return this.usersService.createUser(user);
    }

}
