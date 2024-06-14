import {ForbiddenException, Injectable} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UserEntity} from "../users/entities/user.entity";
import {JwtService} from "@nestjs/jwt";
import {compare} from "bcrypt";


@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {
    }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);

        const isPasswordMatch = await compare(password,user.password)
        if (user && isPasswordMatch) {
            const { password, ...result } = user;
            return result;
        }

        return null;
    }

    async register(dto: CreateUserDto) {
        try {
            console.log(dto)
            const {email,login} = dto
            const userEmail = await this.usersService.findByEmail(email)
            const userLogin = await this.usersService.findByLogin(login)
            if(!userLogin && !userEmail) {
                const userData = await this.usersService.create(dto)

                return {token: this.jwtService.sign({id: userData.id})}
            }
           await Promise.reject('')
        } catch (err) {
            throw new ForbiddenException('Ошибка при регистрации')
        }
    }

    async login(user: UserEntity) {
        return {token: this.jwtService.sign({id: user.id})}
    }
}
