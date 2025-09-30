import { Controller, Get } from '@nestjs/common';

@Controller('')
export class HelloController {
    @Get('/')
    index() {
        return 'Hello World!';
    }
}
