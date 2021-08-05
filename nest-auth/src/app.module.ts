import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ResetModule } from './reset/reset.module';
import { GunModule } from './gun/gun.module';

@Module({
  imports: [AuthModule,
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'123456',
      database:'nest_auth',
      autoLoadEntities:true,
      synchronize:true
    }),
    ResetModule,
    GunModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
