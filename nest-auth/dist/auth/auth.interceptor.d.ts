import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
export declare class AuthInterceptor implements NestInterceptor {
    private jwtService;
    constructor(jwtService: JwtService);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
