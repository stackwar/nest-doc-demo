import { Controller, Post } from '@nestjs/common';
import { execCmd } from './utils';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  @Post('hook')
  async hook() {
    await execCmd('git pull');
    console.log('pull done');
  }
}
