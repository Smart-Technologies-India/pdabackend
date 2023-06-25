import { Injectable } from '@nestjs/common';
import { CreateOldcopyInput } from './dto/create-oldcopy.input';
import { UpdateOldcopyInput } from './dto/update-oldcopy.input';

@Injectable()
export class OldcopyService {
  create(createOldcopyInput: CreateOldcopyInput) {
    return 'This action adds a new oldcopy';
  }

  findAll() {
    return `This action returns all oldcopy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} oldcopy`;
  }

  update(id: number, updateOldcopyInput: UpdateOldcopyInput) {
    return `This action updates a #${id} oldcopy`;
  }

  remove(id: number) {
    return `This action removes a #${id} oldcopy`;
  }
}
