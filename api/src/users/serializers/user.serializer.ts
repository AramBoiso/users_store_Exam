import { Exclude } from 'class-transformer';

export class UserEntity {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;

  @Exclude()
  password: string;

  @Exclude()
  createAt: Date;

  @Exclude()
  updateAt: Date;

  @Exclude()
  deleteAt: Date;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
