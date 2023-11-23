import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { User } from './entity/user.entity';

// Service File for Manage USer Listing
@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private userModel: mongoose.Model<User>,
  ) {}

  /**
   * add user  information
   */
  async addUser(user: User): Promise<object> {
    try {
      const res = await this.userModel.create(user);
      return res;
    } catch (error) {
      return error;
    }
  }
}
