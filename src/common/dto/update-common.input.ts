import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateCommonInput } from './create-common.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { FormType, Status, queryStatus } from '@prisma/client';

@InputType()
export class UpdateCommonInput extends PartialType(CreateCommonInput) {
  @IsNotEmpty()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @Field(() => Int)
  form_id: number;

  @IsOptional()
  @Field(() => Int)
  user_id: number;

  @IsOptional()
  @Field(() => String)
  auth_user_id: string;

  @IsOptional()
  @Field(() => String)
  focal_user_id: string;

  @IsOptional()
  @Field(() => String)
  intra_user_id: string;

  @IsOptional()
  @Field(() => String)
  inter_user_id: string;

  @IsOptional()
  @Field(() => String)
  village: string;

  @IsOptional()
  @Field(() => String)
  name: string;

  @IsOptional()
  @Field(() => String)
  number: string;

  @IsOptional()
  @Field(() => Int)
  form_status: number;

  @IsOptional()
  @Field(() => FormType, { nullable: true })
  form_type: FormType;

  @IsOptional()
  @Field(() => queryStatus, { nullable: true })
  query_status: queryStatus;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
