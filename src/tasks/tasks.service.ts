import { Injectable, NotFoundException, Search } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task-dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository:TaskRepository
    ){}



        async getTaskById(id:number):Promise<Task>{
            const found = await this.taskRepository.findOneBy({id});
            if (!found) {
                throw new NotFoundException(`Task with id : ${id} not found`)
            }
            return found

        }

}
