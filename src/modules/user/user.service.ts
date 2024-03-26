import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {}

  // 新增一个用户
  async create(entity: DeepPartial<User>) {
    const res = await this.UserRepository.insert(entity);
    if (res && res.raw.affectedRows > 0) {
      return true;
    }
    return false;
  }

  // 删除一个用户
  async del(id: string) {
    const res = await this.UserRepository.delete(id);
    if (res && res.raw.affectedRows > 0) {
      return true;
    }
    return false;
  }

  // 更新一个用户
  async update(id: string, entity: DeepPartial<User>) {
    const res = await this.UserRepository.update(id, entity);
    if (res.affected > 0) {
      return true;
    }
    return false;
  }

  // 查询一个用户
  async find(id: string) {
    const res = await this.UserRepository.findOne({
      where: { id },
    });
    return res;
  }
}
