"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetModule = void 0;
const common_1 = require("@nestjs/common");
const reset_service_1 = require("./reset.service");
const reset_controller_1 = require("./reset.controller");
const typeorm_1 = require("@nestjs/typeorm");
const reset_entity_1 = require("./reset.entity");
const mailer_1 = require("@nestjs-modules/mailer");
const auth_module_1 = require("../auth/auth.module");
let ResetModule = class ResetModule {
};
ResetModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([reset_entity_1.ResetEntity]),
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'localhost',
                    port: 1025
                },
                defaults: {
                    from: 'no-replay@localhost.com'
                }
            }),
            auth_module_1.AuthModule
        ],
        providers: [reset_service_1.ResetService],
        controllers: [reset_controller_1.ResetController]
    })
], ResetModule);
exports.ResetModule = ResetModule;
//# sourceMappingURL=reset.module.js.map