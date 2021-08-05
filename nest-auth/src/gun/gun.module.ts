import { Module } from '@nestjs/common';
import { GunController } from './gun.controller';
import { GunService } from './gun.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GunEntity } from './gun.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([GunEntity]),
  ],
  controllers: [GunController],
  providers: [GunService],
  exports: [GunService]
})
export class GunModule {}
