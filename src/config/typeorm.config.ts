import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig:TypeOrmModuleOptions ={
    type: 'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'atrapass',
    database:'taskmanagement',
    entities:[__dirname + '/../**/*.entity.ts'],
    synchronize:true
};