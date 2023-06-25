import { CreateOldcopyInput } from './create-oldcopy.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOldcopyInput extends PartialType(CreateOldcopyInput) {
  @Field(() => Int)
  id: number;
}
