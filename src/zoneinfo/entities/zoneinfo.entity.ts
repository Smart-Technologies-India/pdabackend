import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Zoneinfo {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
