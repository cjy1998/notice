import { createZodDto } from 'nestjs-zod';
import { UserRegisterSchema } from '@notic/shared'; // 从 shared 包引入

// 魔法在这里：
// 我们直接使用 Shared 包里的 Schema 来生成 NestJS DTO
export class RegisterDto extends createZodDto(UserRegisterSchema) {}
