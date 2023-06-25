import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OldcopyService } from './oldcopy.service';
import { Oldcopy } from './entities/oldcopy.entity';
import { CreateOldcopyInput } from './dto/create-oldcopy.input';
import { UpdateOldcopyInput } from './dto/update-oldcopy.input';

@Resolver(() => Oldcopy)
export class OldcopyResolver {
  constructor(private readonly oldcopyService: OldcopyService) {}

  @Mutation(() => Oldcopy)
  createOldcopy(@Args('createOldcopyInput') createOldcopyInput: CreateOldcopyInput) {
    return this.oldcopyService.create(createOldcopyInput);
  }

  @Query(() => [Oldcopy], { name: 'oldcopy' })
  findAll() {
    return this.oldcopyService.findAll();
  }

  @Query(() => Oldcopy, { name: 'oldcopy' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.oldcopyService.findOne(id);
  }

  @Mutation(() => Oldcopy)
  updateOldcopy(@Args('updateOldcopyInput') updateOldcopyInput: UpdateOldcopyInput) {
    return this.oldcopyService.update(updateOldcopyInput.id, updateOldcopyInput);
  }

  @Mutation(() => Oldcopy)
  removeOldcopy(@Args('id', { type: () => Int }) id: number) {
    return this.oldcopyService.remove(id);
  }
}
