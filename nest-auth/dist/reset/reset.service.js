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
exports.ResetService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const reset_entity_1 = require("./reset.entity");
let ResetService = class ResetService {
    constructor(resetRepository) {
        this.resetRepository = resetRepository;
    }
    async create(reset) {
        console.log(reset);
        return await this.resetRepository.save(reset);
    }
    async findOne(condition) {
        return await this.resetRepository.findOne(condition);
    }
};
ResetService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(reset_entity_1.ResetEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ResetService);
exports.ResetService = ResetService;
//# sourceMappingURL=reset.service.js.map