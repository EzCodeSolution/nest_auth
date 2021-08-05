"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetController = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth/auth.service");
const reset_service_1 = require("./reset.service");
const bcrypt = require("bcrypt");
let ResetController = class ResetController {
    constructor(resetService, mailService, authService) {
        this.resetService = resetService;
        this.mailService = mailService;
        this.authService = authService;
    }
    async forgot(email) {
        const token = Math.random().toString(20).substr(2, 12);
        await this.resetService.create({
            email,
            token
        });
        const url = `http://localhost:4200/reset/${token}`;
        await this.mailService.sendMail({
            to: email,
            subject: 'Reset yout password',
            html: `<div>
            <h1>Reset success</h1>
            <div><a href="${url}">click here</a> to reset password</div> 
            </div>`
        });
        return {
            message: "Check your email"
        };
    }
    async reset(token, password, password_confirm) {
        if (password !== password_confirm) {
            throw new common_1.BadRequestException('Password do not match');
        }
        const reset = await this.resetService.findOne({ token });
        const email = reset.email;
        const user = await this.authService.findOneBy({ email });
        if (!user) {
            throw new common_1.NotFoundException('User not found!');
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        await this.authService.update(user.id, { password: hashedPassword });
        return {
            message: "Success"
        };
    }
};
__decorate([
    common_1.Post('forgot'),
    __param(0, common_1.Body('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResetController.prototype, "forgot", null);
__decorate([
    common_1.Post('reset'),
    __param(0, common_1.Body('token')),
    __param(1, common_1.Body('password')),
    __param(2, common_1.Body('password_confirm')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ResetController.prototype, "reset", null);
ResetController = __decorate([
    common_1.Controller('reset'),
    __param(2, common_1.Inject(common_1.forwardRef(() => auth_service_1.AuthService))),
    __metadata("design:paramtypes", [reset_service_1.ResetService,
        mailer_1.MailerService,
        auth_service_1.AuthService])
], ResetController);
exports.ResetController = ResetController;
//# sourceMappingURL=reset.controller.js.map