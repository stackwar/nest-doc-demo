import { Controller, Post, Body, Param } from '@nestjs/common';
import { execCmd } from './utils';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  @Post('hook')
  async hook(@Body() body, @Param() param) {
    await execCmd('git pull');
    console.log(body, param, 'pull done');
  }
}
