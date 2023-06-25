import { Injectable } from '@nestjs/common';
import { CreateZoneinfoInput } from './dto/create-zoneinfo.input';
import { UpdateZoneinfoInput } from './dto/update-zoneinfo.input';

@Injectable()
export class ZoneinfoService {
  create(createZoneinfoInput: CreateZoneinfoInput) {
    return 'This action adds a new zoneinfo';
  }

  findAll() {
    return `This action returns all zoneinfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} zoneinfo`;
  }

  update(id: number, updateZoneinfoInput: UpdateZoneinfoInput) {
    return `This action updates a #${id} zoneinfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} zoneinfo`;
  }
}
