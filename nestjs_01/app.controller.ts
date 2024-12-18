import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller()
export class AppController {
  // GET route that returns a welcome message
  @Get()
  getHello(): string {
    return 'Welcome to the First NestJS Project!';
  }

  // POST route that accepts JSON data and echoes it back
  @Post('data')
  postData(@Body() body: any): any {
    return { message: 'Data received!', data: body };
  }
}
