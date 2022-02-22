import { Post, Body, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  validate(@Body() req) {
    return this.authService.validateUser(req.email, req.password);
  }
}
