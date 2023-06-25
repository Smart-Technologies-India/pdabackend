import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PetroleumService } from './petroleum.service';
import { Petroleum } from './entities/petroleum.entity';
import { CreatePetroleumInput } from './dto/create-petroleum.input';
import { UpdatePetroleumInput } from './dto/update-petroleum.input';

@Resolver(() => Petroleum)
export class PetroleumResolver {
  constructor(private readonly petroleumService: PetroleumService) {}

  @Mutation(() => Petroleum)
  createPetroleum(@Args('createPetroleumInput') createPetroleumInput: CreatePetroleumInput) {
    return this.petroleumService.create(createPetroleumInput);
  }

  @Query(() => [Petroleum], { name: 'petroleum' })
  findAll() {
    return this.petroleumService.findAll();
  }

  @Query(() => Petroleum, { name: 'petroleum' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.petroleumService.findOne(id);
  }

  @Mutation(() => Petroleum)
  updatePetroleum(@Args('updatePetroleumInput') updatePetroleumInput: UpdatePetroleumInput) {
    return this.petroleumService.update(updatePetroleumInput.id, updatePetroleumInput);
  }

  @Mutation(() => Petroleum)
  removePetroleum(@Args('id', { type: () => Int }) id: number) {
    return this.petroleumService.remove(id);
  }
}
