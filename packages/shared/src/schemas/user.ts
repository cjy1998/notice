import { z } from "zod";

// 定义 User 相关的 Schema
export const UserRegisterSchema = z.object({
  email: z.string().email("邮箱格式不正确").describe("用户邮箱"),
  password: z.string().min(6, "密码至少6位").max(20).describe("密码"),
  name: z.string().min(2, "用户名太短").describe("用户名"),
});

// 导出 TypeScript 类型
export type UserRegisterDto = z.infer<typeof UserRegisterSchema>;
