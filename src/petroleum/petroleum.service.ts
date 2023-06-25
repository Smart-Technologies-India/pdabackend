import { Injectable } from '@nestjs/common';
import { CreatePetroleumInput } from './dto/create-petroleum.input';
import { UpdatePetroleumInput } from './dto/update-petroleum.input';

@Injectable()
export class PetroleumService {
  create(createPetroleumInput: CreatePetroleumInput) {
    return 'This action adds a new petroleum';
  }

  findAll() {
    return `This action returns all petroleum`;
  }

  findOne(id: number) {
    return `This action returns a #${id} petroleum`;
  }

  update(id: number, updatePetroleumInput: UpdatePetroleumInput) {
    return `This action updates a #${id} petroleum`;
  }

  remove(id: number) {
    return `This action removes a #${id} petroleum`;
  }
}
