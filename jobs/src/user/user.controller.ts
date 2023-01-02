/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDTO } from './dto/user-dto';

@Controller('user')
export class UserController {

    @Post('/')
    user(@Body() user: UserDTO) {
        return user;
    }

}
