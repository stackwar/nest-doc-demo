import { Controller, Post } from '@nestjs/common';
import { execa } from 'execa';
@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  @Post('hook')
  async hook() {
    // const { stdout } = await execa('git', ['pull']);
    // return stdout;
  }
}
