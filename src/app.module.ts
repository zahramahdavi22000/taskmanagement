import { Module } from '@nestjs/common';

import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { TasksService } from './tasks/tasks.service';



@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot(typeOrmConfig)
  ]
})
export class AppModule {}
