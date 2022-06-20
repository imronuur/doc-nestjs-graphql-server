import { Injectable, ForbiddenException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'prisma/prisma.service';
import * as argon from 'argon2';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput) {
    try {
      const alreadyUser = await this.prisma.user.findUnique({
        where: { email: createUserInput.email },
      });
      console.log(alreadyUser);
      if (alreadyUser) {
        throw new ForbiddenException('User already exists');
      } else {
        const hash = await argon.hash(createUserInput.password);
        const user = await this.prisma.user.create({
          data: {
            ...createUserInput,
            password: hash,
          },
        });
        delete user.password;
        return user;
      }
    } catch (error) {
      throw error;
    }
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
