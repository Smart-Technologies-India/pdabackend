import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateDealinghandInput } from './create-dealinghand.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { FormType } from '@prisma/client';

@InputType()
export class UpdateDealinghandInput extends PartialType(
  CreateDealinghandInput,
) {
  @IsNotEmpty()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @Field(() => FormType)
  file_type: FormType;

  @IsOptional()
  @Field(() => Boolean)
  collector: boolean;

  @IsOptional()
  @Field(() => Boolean)
  dycollector: boolean;

  @IsOptional()
  @Field(() => Boolean)
  atp: boolean;

  @IsOptional()
  @Field(() => Boolean)
  jtp: boolean;

  @IsOptional()
  @Field(() => Boolean)
  je: boolean;

  @IsOptional()
  @Field(() => Boolean)
  fieldinspector: boolean;

  @IsOptional()
  @Field(() => Boolean)
  sitesupervisor: boolean;

  @IsOptional()
  @Field(() => Boolean)
  architectassistant: boolean;

  @IsOptional()
  @Field(() => Boolean)
  planningdraughtsman: boolean;

  @IsOptional()
  @Field(() => Boolean)
  spdraughtsman: boolean;

  @IsOptional()
  @Field(() => Boolean)
  stdraughtsman: boolean;

  @IsOptional()
  @Field(() => Boolean)
  landsupted: boolean;

  @IsOptional()
  @Field(() => Boolean)
  mamlatdar: boolean;

  @IsOptional()
  @Field(() => Boolean)
  eocs: boolean;

  @IsOptional()
  @Field(() => Boolean)
  dept1: boolean;

  @IsOptional()
  @Field(() => Boolean)
  dept2: boolean;

  @IsOptional()
  @Field(() => Boolean)
  dept3: boolean;

  @IsOptional()
  @Field(() => Boolean)
  dept4: boolean;
}
