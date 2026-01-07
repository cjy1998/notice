import { Injectable } from '@nestjs/common';
import { IUser } from '@notic/shared';

@Injectable()
export class AppService {
  getUser(): IUser {
    return {
      id: 1,
      name: 'Gemini Admin',
      email: 'admin@google.com',
    };
  }
}
