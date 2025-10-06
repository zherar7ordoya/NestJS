/*
Cuando hablamos de controladores, solamente estamos hablando
de funciones que se van a llamar cuando una ruta sea visitada.
*/

import { Controller, Get } from '@nestjs/common';

@Controller('')
export class HelloController {
    @Get('/')
    index() {
        return 'Hello World!';
    }
}
