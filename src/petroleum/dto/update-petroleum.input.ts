import { CreatePetroleumInput } from './create-petroleum.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePetroleumInput extends PartialType(CreatePetroleumInput) {
  @Field(() => Int)
  id: number;
}
