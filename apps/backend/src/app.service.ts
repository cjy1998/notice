import { Injectable } from '@nestjs/common';
import { IUser } from '@notic/shared';
import { PrismaService } from './prisma/prisma.service';
@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getUser(): IUser {
    return {
      id: 1,
      name: 'Gemini Admin',
      email: 'admin@google.com',
    };
  }
  async getAllUsers(): Promise<IUser[]> {
    return await this.prisma.user.findMany();
  }
}
