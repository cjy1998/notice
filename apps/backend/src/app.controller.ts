import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IUser } from '@notic/shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser(): IUser {
    return this.appService.getUser();
  }
  @Get('users')
  async getAllUsers(): Promise<IUser[]> {
    return await this.appService.getAllUsers();
  }
}
