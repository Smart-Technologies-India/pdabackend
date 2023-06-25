import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ZoneinfoService } from './zoneinfo.service';
import { Zoneinfo } from './entities/zoneinfo.entity';
import { CreateZoneinfoInput } from './dto/create-zoneinfo.input';
import { UpdateZoneinfoInput } from './dto/update-zoneinfo.input';

@Resolver(() => Zoneinfo)
export class ZoneinfoResolver {
  constructor(private readonly zoneinfoService: ZoneinfoService) {}

  @Mutation(() => Zoneinfo)
  createZoneinfo(@Args('createZoneinfoInput') createZoneinfoInput: CreateZoneinfoInput) {
    return this.zoneinfoService.create(createZoneinfoInput);
  }

  @Query(() => [Zoneinfo], { name: 'zoneinfo' })
  findAll() {
    return this.zoneinfoService.findAll();
  }

  @Query(() => Zoneinfo, { name: 'zoneinfo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.zoneinfoService.findOne(id);
  }

  @Mutation(() => Zoneinfo)
  updateZoneinfo(@Args('updateZoneinfoInput') updateZoneinfoInput: UpdateZoneinfoInput) {
    return this.zoneinfoService.update(updateZoneinfoInput.id, updateZoneinfoInput);
  }

  @Mutation(() => Zoneinfo)
  removeZoneinfo(@Args('id', { type: () => Int }) id: number) {
    return this.zoneinfoService.remove(id);
  }
}
