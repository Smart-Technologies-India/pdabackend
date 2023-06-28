import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUserById(id);
  }

  @Query(() => User)
  getUserDPById(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUserDPById(id);
  }

  @Mutation(() => Int)
  updateUserDPById(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.updateUserDPById(updateUserInput);
  }
}
