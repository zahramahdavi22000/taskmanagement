import { Repository } from "typeorm";
import { Task } from "./task.entity";

export class TaskRepository extends Repository<Task> {
  // Your custom repository methods can be defined here if needed
}
