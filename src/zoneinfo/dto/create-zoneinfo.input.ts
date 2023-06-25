import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateZoneinfoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
