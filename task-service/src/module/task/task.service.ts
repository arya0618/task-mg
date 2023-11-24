import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { Task } from './entity/task.entity';

// Service File for Manage Task Listing
@Injectable()
export class TaskService {
  constructor(
    @InjectModel('Task')
    private taskModel: mongoose.Model<Task>,
  ) {}
  /**
   * get Task list  information
   */
  async getTaskByUser(userId: string): Promise<object> {
    try {
      const res = await this.taskModel.find({ assignedTo: userId });
      return res;
    } catch (error) {
      return error;
    }
  }

  async searchAndSortTasks(query: any): Promise<Task[]> {
    const { isComplete, dueDate, priority, prioritySort, dueDateSort } = query;
    const conditions: any = {};
    const sortObj: any = {};
    if (isComplete) {
      conditions.isComplete = true;
    } else {
      conditions.isComplete = false;
    }
    if (dueDate || prioritySort) {
      conditions.dueDate = { $lte: new Date(dueDate) };
      sortObj.dueDate = 1;
    } else {
      sortObj.dueDate = -1;
    }

    if (priority || dueDateSort) {
      conditions.priority = priority;
      sortObj.priority = 1;
    } else {
      sortObj.priority = -1;
    }
    // console.log('data before::::');
    const data: any = await this.taskModel
      .find(conditions)
      .sort(sortObj) //ascending sort
      .exec();
    // console.log(data);
    return data;
  }

  /**
   * add Task  information
   */
  async addTask(task: Task): Promise<object> {
    try {
      task.isComplete = false;
      task.dueDate = new Date(task.dueDate);
      const res = await this.taskModel.create(task);
      return res;
    } catch (error) {
      return error;
    }
  }
}
