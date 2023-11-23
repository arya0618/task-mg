import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { constants } from 'src/helpers/constants';
import { AddTaskDto } from './dto/addtask.dto';
import { TaskService } from './task.service';

@ApiTags(constants.TASK_CONTROLLER)
@Controller(constants.TASK_CONTROLLER)
@Controller('Task')
export class TaskController {
  constructor(private readonly TaskService: TaskService) {}
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Task fetched',
  })
  @Get()
  healthStatus(): object {
    return { status: 200, message: 'Task-get' };
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Task fetched',
  })
  @Post('/add')
  TaskCreate(@Body() addTaskDto: AddTaskDto): Promise<object> {
    return this.TaskService.addTask(addTaskDto);
  }
}
