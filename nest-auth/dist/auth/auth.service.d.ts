import { Repository } from 'typeorm';
import { UserEntity } from './models/user.entity';
import { User } from './models/user.interface';
export declare class AuthService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    create(user: User): Promise<User>;
    findOneBy(condition: any): Promise<User>;
    update(id: number, data: any): Promise<any>;
}
