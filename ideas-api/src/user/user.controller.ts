import { ValidationPipe } from './../shared/validation.pipe';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';
import {
  Controller,
  Post,
  Get,
  Body,
  UsePipes,
  UseGuards,
  Query,
} from '@nestjs/common';
import { AuthGuard } from 'src/shared/auth.guard';
import { User } from './user.decorator';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  // @Get('api/users')
  // @UseGuards(new AuthGuard())
  // showAllUsers(@User() user) {
  //   // UserDecorator handle the user who take the action
  //   console.log(user);
  //   return this.userService.showAll();
  // }
  @Get('api/users')
  showAllUsers(@Query('page') page: number) {
    return this.userService.showAll(page);
  }

  @Post('auth/login')
  @UsePipes(new ValidationPipe())
  login(@Body() data: UserDTO) {
    return this.userService.login(data);
  }

  @Post('auth/register')
  @UsePipes(new ValidationPipe())
  register(@Body() data: UserDTO) {
    return this.userService.register(data);
  }
}
