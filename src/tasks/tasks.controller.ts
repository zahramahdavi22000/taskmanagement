import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task-dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './task.entity';


@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) { }
//     @Get()
//     getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Task[] {
//         if(Object.keys(filterDto).length){
//             return this.taskService.getTasksWithFilters(filterDto)
//         }else{
//             return this.taskService.getAllTasks();
//         }
      

//     }

    @Get('/:id')
    getTaskById(@Param('id',ParseIntPipe) id: number):Promise<Task> {
        return this.taskService.getTaskById(id)
    }

//     @Post()
//     @UsePipes(ValidationPipe)
//     createTask(@Body() CreateTaskDto: CreateTaskDto): Task {
//         return this.taskService.createTask(CreateTaskDto)
//     }

//     @Delete('/:id')
//     DeleteTaskById(@Param('id') id: 'string'): void {
//         this.taskService.DeleteTaskById(id)
//     }

//     @Patch('/:id/status')
//     UpdateTaskStatus(@Param('id') id: 'string',
//         @Body('status', TaskStatusValidationPipe) status: TaskStatus): Task {
//         return this.taskService.UpdateTaskStatus(id, status)
//     }
// }

}

