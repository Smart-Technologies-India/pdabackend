import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Oldcopy {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
