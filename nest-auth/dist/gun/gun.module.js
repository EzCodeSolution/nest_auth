"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GunModule = void 0;
const common_1 = require("@nestjs/common");
const gun_controller_1 = require("./gun.controller");
const gun_service_1 = require("./gun.service");
const typeorm_1 = require("@nestjs/typeorm");
const gun_entity_1 = require("./gun.entity");
let GunModule = class GunModule {
};
GunModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([gun_entity_1.GunEntity]),
        ],
        controllers: [gun_controller_1.GunController],
        providers: [gun_service_1.GunService],
        exports: [gun_service_1.GunService]
    })
], GunModule);
exports.GunModule = GunModule;
//# sourceMappingURL=gun.module.js.map