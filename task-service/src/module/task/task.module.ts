import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';

import { TaskService } from './task.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './entity/task.entity';

@Module({
  controllers: [TaskController],
  imports: [MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }])],
  providers: [TaskService],
})
export class TaskModule {}
