import { IsString, IsNotEmpty, IsEnum, IsEmail } from 'class-validator';
import { UserRole } from '../../../helpers/enums';
export class AddUserDto {
  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsEnum(UserRole)
  userType: string;
}
