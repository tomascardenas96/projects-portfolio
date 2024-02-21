import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './guard/auth.guard';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { ActiveUserInterface } from 'src/common/interfaces/Active-user.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() user: RegisterDto) {
    return this.authService.register(user);
  }

  @Post('/login')
  login(@Body() user: LoginDto) {
    return this.authService.login(user);
  }

  @Get('/home')
  @UseGuards(AuthGuard)
  home(@ActiveUser() user: ActiveUserInterface) {
    return user;
  }
}
