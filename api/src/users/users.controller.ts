import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  HttpCode,
} from '@nestjs/common';
import { CreateUserDto } from './dtos';
import { UsersService } from './users.service';

@Controller({ path: 'users', version: '1' })
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async findAll() {
    const response = this.usersService.findAll();
    return response;
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  async findOne(@Param('id') id: number) {
    const response = this.usersService.findOne(id);
    return response;
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const response = this.usersService.create(createUserDto);
    return response;
  }

  @Delete(':id')
  @HttpCode(203)
  async deleteOne(@Param('id') id: number) {
    const response = this.usersService.delete(id);
    return response;
  }
}
