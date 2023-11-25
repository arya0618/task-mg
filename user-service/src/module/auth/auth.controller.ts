// auth.controller.ts
import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() credentials: { email: string; userType: string }) {
    console.log('email: ', credentials);
    const user = await this.authService.validateUser(
      credentials.email,
      credentials.userType,
    );
    console.log('login get user', user);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = await this.authService.generateToken(user);
    return { access_token: token };
  }
}
