import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  create(user: CreateUserDto): Promise<User> {
    try {
      const newUser = this.userRepository.create(user);
      return this.userRepository.save(newUser);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  findOneById(id: number) {
    return this.userRepository.find({where: { user_id: id }})
  }

  findAll() {
    return this.userRepository.find();
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
