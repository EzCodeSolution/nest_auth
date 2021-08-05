import { Repository } from 'typeorm';
import { ResetEntity } from './reset.entity';
import { Reset } from './reset.interface';
export declare class ResetService {
    private readonly resetRepository;
    constructor(resetRepository: Repository<ResetEntity>);
    create(reset: Reset): Promise<Reset>;
    findOne(condition: any): Promise<Reset>;
}
