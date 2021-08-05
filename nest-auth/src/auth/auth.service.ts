import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './models/user.entity';
import { User } from './models/user.interface';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserEntity) private userRepository : Repository<UserEntity>
    ){}

    async create(user: User): Promise<User>{
        return await this.userRepository.save(user);
    }

    async findOneBy(condition): Promise<User> {
        return await this.userRepository.findOne(condition);
    }
    
    async update(id: number, data): Promise<any>{
        return await this.userRepository.update(id, data);
    }
}
