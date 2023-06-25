import { CreateZoneinfoInput } from './create-zoneinfo.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateZoneinfoInput extends PartialType(CreateZoneinfoInput) {
  @Field(() => Int)
  id: number;
}
