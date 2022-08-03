import { Controller, Post } from '@nestjs/common';
import { exec } from 'child_process';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  @Post('hook')
  async hook() {
    await exec('git pull');
    console.log('pull done');
  }
}
