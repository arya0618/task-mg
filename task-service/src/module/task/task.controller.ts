import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  ValidationPipe,
  UsePipes,
  Param,
  Query,
} from '@nestjs/common';
import { ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { constants, descriptionMsg } from 'src/helpers/constants';
import { AddTaskDto } from './dto/addtask.dto';
import { TaskService } from './task.service';
import { SearchTaskDto } from './dto/searchtask.dto';

@ApiTags(`${constants.TASK_CONTROLLER}-API`)
@Controller(constants.TASK_CONTROLLER)
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiResponse({
    status: HttpStatus.OK,
    description: descriptionMsg.GET_TASK_ID,
  })
  @Get('/:userId')
  getTaskByUser(@Param('userId') userId: string): any {
    return this.taskService.getTaskByUser(userId);
  }

  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiResponse({
    status: HttpStatus.OK,
    description: descriptionMsg.ADD_TASK,
  })
  @ApiBody({
    type: AddTaskDto,
    description: 'Json structure for task object',
  })
  @Post()
  taskCreate(@Body() addTaskDto: AddTaskDto): Promise<object> {
    return this.taskService.addTask(addTaskDto);
  }

  @UsePipes(new ValidationPipe({ transform: true }))
  @Get('')
  @ApiResponse({
    status: HttpStatus.OK,
    description: descriptionMsg.SEARCH_TASK,
  })
  taskSearch(@Query() query: SearchTaskDto): any {
    return this.taskService.searchAndSortTasks(query);
  }
}
