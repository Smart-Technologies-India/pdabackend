import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { CreateAuthInput } from './dto/create-auth.input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { LoginUserInput } from './dto/loginuser.input';
import { SignUpUserInput } from './dto/signup.input';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => Auth)
  signin(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return this.authService.signin(
      loginUserInput.contact,
      loginUserInput.password,
    );
  }

  @Mutation(() => Auth)
  signup(@Args('signUpUserInput') signUpUserInput: SignUpUserInput) {
    return this.authService.signup(
      signUpUserInput.name,
      signUpUserInput.contact,
      signUpUserInput.password,
    );
  }
}