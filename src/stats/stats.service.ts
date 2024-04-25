import {Injectable} from '@nestjs/common';
import {UserEntity} from "../users/entities/user.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class StatsService {
    constructor(
        @InjectRepository(UserEntity)
        private repository: Repository<UserEntity>) {
    }

    async getAllUsers() {
        return this.repository.query('Select second_name from users')
    }

    async getCountUsers(){
        return this.repository.query('Select count(*) from users')
    }

    async getLastRow(){
        return this.repository.query('Select * from users order by id desc limit 1')
    }

    async getCountRowsLastMonth(){
        return this.repository.query("SELECT count(*) from users where date_reg >  CURRENT_DATE - INTERVAL '3 months'")
    }
}
