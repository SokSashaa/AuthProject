import {Controller, Get, UseGuards} from '@nestjs/common';
import {StatsService} from './stats.service';
import {ApiTags} from "@nestjs/swagger";
import {JwtAuthGuard} from "../auth/guards/jwt.guard";

@ApiTags('stats')
@UseGuards(JwtAuthGuard)
@Controller('stats')
export class StatsController {
    constructor(private readonly statsService: StatsService) {
    }

    @Get('/users')
    async getAllUsers() {
        return this.statsService.getAllUsers()
    }

    @Get('/countUsers')
    async getCountUsers() {
        return this.statsService.getCountUsers()
    }

    @Get('/getLastRow')
    async getLastRow() {
        return this.statsService.getLastRow()
    }

    @Get('/countRowsLastMonth')
    async getCountRowsLastMonth(){
        return this.statsService.getCountRowsLastMonth()
    }
}
