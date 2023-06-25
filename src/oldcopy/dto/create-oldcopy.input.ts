import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOldcopyInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
