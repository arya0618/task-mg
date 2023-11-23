import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { constants } from 'src/helpers/constants';
import { AddUserDto } from './dto/adduser.dto';
import { UserService } from './user.service';

@ApiTags(constants.USER_CONTROLLER)
@Controller(constants.USER_CONTROLLER)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'user fetched',
  })
  @Get()
  healthStatus(): object {
    return { status: 200, message: 'User-get' };
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'user fetched',
  })
  @Post('/add')
  userCreate(@Body() addUserDto: AddUserDto): Promise<object> {

    return this.userService.addUser(addUserDto);
  }
}
