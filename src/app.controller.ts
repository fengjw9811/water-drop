import { Controller, Get } from '@nestjs/common';
import { UserService } from './modules/user/user.service';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get('/create')
  async create(): Promise<boolean> {
    return await this.userService.create({
      name: '水滴超级管理员',
      desc: '管理员',
      tel: '8800888',
      password: '123456',
      account: 'admin',
    });
  }

  @Get('/del')
  async del() {
    return await this.userService.del('85928b1c-975a-4ae1-9cd9-3a675902a2a6');
  }

  @Get('update')
  async update() {
    return await this.userService.update(
      '0ced6530-0ccc-450a-b01e-41c3b4187ad0',
      {
        name: '水滴超级管理员1111',
      },
    );
  }

  @Get('find')
  async find() {
    return await this.userService.find('0ced6530-0ccc-450a-b01e-41c3b4187ad0');
  }
}
