import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {

        const request = context.switchToHttp().getRequest() as Request;
        console.log('Requesting URL:', request.url);

        /*
        if (request.url === '/greet') {
            return false; // Denegar acceso a la ruta /greet
        }
            */

        if (!request.headers['authorization']) {
            return false; // Denegar acceso si no hay encabezado de autorización
        }

        return true;
    }
}
