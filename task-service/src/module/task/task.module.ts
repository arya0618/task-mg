import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';

import { TaskService } from './task.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './entity/task.entity';
import { RolesGuard } from 'src/helpers/roles/roles.guards';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [TaskController],
  imports: [
    PassportModule,
    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
  ],
  providers: [TaskService, RolesGuard],
})
export class TaskModule {}
