import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async addUser(body: RegisterDto) {
    try {
      return await this.prisma.user.create({
        data: body,
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('注册失败');
    }
  }
}
