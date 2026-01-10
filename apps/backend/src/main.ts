import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { cleanupOpenApiDoc, ZodValidationPipe } from 'nestjs-zod';
import { TransformInterceptor } from './common/interceptor/transform.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 启用 Zod 验证管道
  app.useGlobalPipes(new ZodValidationPipe());

  // 局响应拦截器（成功响应）
  app.useGlobalInterceptors(new TransformInterceptor());
  // 全局异常过滤器（错误响应）
  app.useGlobalFilters(new HttpExceptionFilter());
  const openApiDoc = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('Example API')
      .setDescription('Example API description')
      .setVersion('1.0')
      .build(),
  );
  SwaggerModule.setup('api', app, cleanupOpenApiDoc(openApiDoc));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
