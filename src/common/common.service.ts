import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCommonInput } from './dto/create-common.input';
import { UpdateCommonInput } from './dto/update-common.input';
import { PrismaService } from 'prisma/prisma.service';
import { SearchCommonInput } from './dto/search-common.input';

@Injectable()
export class CommonService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllCommon() {
    const common = await this.prisma.common.findMany({
      where: { deletedAt: null },
    });
    if (common.length == 0)
      throw new BadRequestException('There is no common.');
    return common;
  }

  async searchCommon(common: SearchCommonInput) {
    const results = await this.prisma.common.findMany({
      where: common,
      include: {
        user: true,
      },
    });

    if (results.length == 0)
      throw new BadRequestException('There is no common');
    return results;
  }

  async getAllCommonById(id: number) {
    const common = await this.prisma.common.findFirst({
      where: { id, deletedAt: null },
    });
    if (!common) throw new BadRequestException('No common exist with this id.');
    return common;
  }

  async createCommon(common: CreateCommonInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(common)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Common = await this.prisma.common.create({
      data: dataToCreate,
    });

    if (!Common) throw new BadRequestException('Unable to create common');
    return Common;
  }

  async updateCommonById(common: UpdateCommonInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(common)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.common.findUnique({
      where: { id: common.id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Common with id ${common.id} not found`);
    }

    const updatedCommon = this.prisma.common.update({
      where: { id: common.id },
      data: dataToUpdate,
    });
    if (!updatedCommon)
      throw new BadRequestException('Unable to update common.');
    return updatedCommon;
  }

  async deleteCommonById(common: UpdateCommonInput) {
    const existing = await this.prisma.common.findUnique({
      where: { id: common.id },
    });

    if (!existing) {
      throw new NotFoundException(`Common with id ${common.id} not found`);
    }

    const deleteCommon = this.prisma.common.update({
      where: { id: common.id },
      data: { deletedAt: common.deletedAt },
    });

    if (!deleteCommon)
      throw new BadRequestException('Unable to update common.');
    return deleteCommon;
  }
}
