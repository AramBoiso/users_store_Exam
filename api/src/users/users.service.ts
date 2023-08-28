import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities';
import { UserEntity } from './serializers';
import { ERROR_MESSAGE, SUCCESSFULL_MESSAGE, USER_ROLE } from './enums';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    const users = await this.usersRepository.find();
    return users.map((user) => new UserEntity(user));
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.usersRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException({
        message: ERROR_MESSAGE.NOT_FOUND,
      });
    }

    return new UserEntity(user);
  }

  async create(user) {
    const { role } = user;

    if (!role) {
      user.role = USER_ROLE.USER;
    }

    const userData = this.usersRepository.create(user);

    try {
      await this.usersRepository.save(userData);
      const data = { message: SUCCESSFULL_MESSAGE.CRETED };

      return { data };
    } catch (error) {
      console.log('error --> ', error);
      throw new InternalServerErrorException({
        message: ERROR_MESSAGE.UNEXPECTED,
      });
    }
  }

  async delete(id: number) {
    await this.usersRepository.softDelete(id);
  }
}
