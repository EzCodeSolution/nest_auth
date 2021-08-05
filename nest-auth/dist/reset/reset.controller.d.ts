import { MailerService } from '@nestjs-modules/mailer';
import { AuthService } from '../auth/auth.service';
import { ResetService } from './reset.service';
export declare class ResetController {
    private resetService;
    private mailService;
    private authService;
    constructor(resetService: ResetService, mailService: MailerService, authService: AuthService);
    forgot(email: string): Promise<{
        message: string;
    }>;
    reset(token: string, password: string, password_confirm: string): Promise<{
        message: string;
    }>;
}
