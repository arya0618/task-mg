import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { Task } from './entity/task.entity';

// Service File for Manage Task Listing
@Injectable()
export class TaskService {
  constructor(
    @InjectModel('Task')
    private TaskModel: mongoose.Model<Task>,
  ) {}

  /**
   * add Task  information
   */
  async addTask(task: Task): Promise<object> {
    try {
      const res = await this.TaskModel.create(task);
      return res;
    } catch (error) {
      return error;
    }
  }
}
