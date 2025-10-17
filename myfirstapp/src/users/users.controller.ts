/*
Cuando hablamos de controladores, solamente estamos hablando
de funciones que se van a llamar cuando una ruta sea visitada.
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Usuarios')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Get('users')
    @ApiOperation({ summary: 'Obtener todos los usuarios' })
    @ApiResponse({ status: 200, description: 'Lista de usuarios obtenida correctamente.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    getUsers() {
        return this.usersService.getUsers();
    }

    @Post('users')
    @ApiOperation({ summary: 'Crear un nuevo usuario' })
    @ApiResponse({ status: 201, description: 'Usuario creado correctamente.' })
    createUser(@Body() user: CreateUserDto) {
        return this.usersService.createUser(user);
    }

}
