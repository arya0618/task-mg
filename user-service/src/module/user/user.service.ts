import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './entity/user.entity';
import { UserRole } from '../../helpers/enums';
import { messages } from 'message/user.msg';
import { constants } from 'helpers/constants';

// Service File for Manage USer Listing
@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private userModel: mongoose.Model<User>,
  ) {}

  /**
   * get user  information
   */
  async getUser(email: string): Promise<object> {
    console.log('email: >>', email);
    try {
      let userType: string = UserRole.USER;
      email.trim() == constants.ADMIN_EMAIL
        ? (userType = UserRole.ADMIN)
        : (userType = UserRole.USER);
      console.log('userType: >>', userType);
      const res = await this.userModel.findOne({
        email,
        userType,
      });
      return res;
    } catch (error) {
      return error;
    }
  }
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

  /**
   * add user  information
   */
  async addAdminUser(user: User): Promise<object> {
    try {
      const existingAdmin = await this.userModel.findOne({
        userType: UserRole.ADMIN,
      });
      if (existingAdmin) {
        throw new NotFoundException('An admin user already exists.');
      }
      return await this.userModel.create(user);
    } catch (error) {
      if (error.status === 404) {
        throw new NotFoundException(error.message);
      }
      console.log(error);
      return error;
    }
  }

  /**
   * delete user  information
   */
  async deleteUser(email: string): Promise<object> {
    try {
      const remove = await this.userModel.deleteOne({ email });
      console.log('removed user:', remove);
      if (remove.deletedCount === 1) {
        return { message: `User deleted : ${email}` };
      }
      throw new NotFoundException(messages.USER_NOTFOUND);
    } catch (error) {
      if (error.status === 404) {
        throw new NotFoundException(error.message);
      }
      console.log(error);
      return error;
    }
  }
}
