import { Module } from '@nestjs/common';
import { StatsService } from './stats.service';
import { StatsController } from './stats.controller';
import {UserEntity} from "../users/entities/user.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  controllers: [StatsController],
  providers: [StatsService],
  imports:[TypeOrmModule.forFeature([UserEntity])],
})
export class StatsModule {}
