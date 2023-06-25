import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePetroleumInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
