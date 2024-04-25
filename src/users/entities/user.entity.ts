import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {gender} from "../enums";

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    first_name:string

    @Column()
    second_name:string

    @Column()
    email:string

    @Column()
    password:string

    @Column()
    login:string

    @Column()
    gender:'man'|'woman'

    @Column()
    date_reg:Date

}
