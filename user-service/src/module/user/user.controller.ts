import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { constants } from '../../helpers/constants';
import { AddUserDto } from './dto/adduser.dto';
import { UserService } from './user.service';
import { UserRole } from '../../helpers/enums';
import { messages } from 'message/user.msg';

@ApiTags(constants.USER_CONTROLLER)
@Controller(constants.USER_CONTROLLER)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'user fetched',
  })
  @Get('/:email')
  getUser(@Param('email') email: string): object {
    return this.userService.getUser(email);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'user creation',
  })
  @Post('/')
  userCreate(@Body() addUserDto: AddUserDto): Promise<object> {
    if (
      addUserDto.email === constants.ADMIN_EMAIL ||
      addUserDto.userName === UserRole.ADMIN ||
      addUserDto.userType === UserRole.ADMIN
    ) {
      throw new NotFoundException(messages.WRONG_USER_DETIALS);
    }
    return this.userService.addUser(addUserDto);
  }

  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'admin user creation',
  })
  @Post('/add-admin')
  adminUserCreate(@Body() addUserDto: AddUserDto): Promise<object> {
    if (
      addUserDto.email !== constants.ADMIN_EMAIL &&
      addUserDto.userName !== UserRole.ADMIN &&
      addUserDto.userType !== UserRole.ADMIN
    ) {
      throw new NotFoundException(`Please provide right credentials of admin`);
    }
    return this.userService.addAdminUser(addUserDto);
  }

@UsePipes(new ValidationPipe({ transform: true }))
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'user fetched',
  })
  @Delete('/:email')
  removeUser(@Param('email') email: string): object {
    return this.userService.deleteUser(email);
  }
}
