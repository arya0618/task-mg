import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(email: string, userType: string): Promise<any> {
    console.log('email: validateUser', email);
    const user: any = await this.userService.getUser(email);
    console.log('usertype: ', user);
    if (user && user.userType === userType) {
      return user;
    }

    throw new UnauthorizedException('Invalid credentials');
  }
  async generateToken(user: any): Promise<string> {
    // console.log('email generateToken>>>', user.email ,roles)
    // const user: any = await this.userService.getUser(user.email);

    if (!user) {
      throw new Error('User not found');
    }

    const payload = { sub: user._id, email: user.email, roles: user.userType };
    return this.jwtService.sign(payload);
  }
}
