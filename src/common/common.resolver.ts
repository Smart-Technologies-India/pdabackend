import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommonService } from './common.service';
import { Common } from './entities/common.entity';
import { CreateCommonInput } from './dto/create-common.input';
import { UpdateCommonInput } from './dto/update-common.input';
import { SearchCommonInput } from './dto/search-common.input';

@Resolver(() => Common)
export class CommonResolver {
  constructor(private readonly commonService: CommonService) {}

  @Query(() => [Common])
  getAllCommon() {
    return this.commonService.getAllCommon();
  }

  @Query(() => Common)
  getAllCommonById(@Args('id', { type: () => Int }) id: number) {
    return this.commonService.getAllCommonById(id);
  }

  @Query(() => [Common])
  searchCommon(
    @Args('searchCommonInput') searchCommonInput: SearchCommonInput,
  ) {
    return this.commonService.searchCommon(searchCommonInput);
  }

  @Mutation(() => Common)
  createCommon(
    @Args('createCommonInput') createCommonInput: CreateCommonInput,
  ) {
    return this.commonService.createCommon(createCommonInput);
  }

  @Mutation(() => Common)
  updateCommonById(
    @Args('updateCommonInput') updateCommonInput: UpdateCommonInput,
  ) {
    return this.commonService.updateCommonById(updateCommonInput);
  }

  @Mutation(() => Common)
  deleteCommonById(
    @Args('updateCommonInput') updateCommonInput: UpdateCommonInput,
  ) {
    return this.commonService.deleteCommonById(updateCommonInput);
  }
}
