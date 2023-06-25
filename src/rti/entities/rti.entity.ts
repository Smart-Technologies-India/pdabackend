import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Agree, Status } from '@prisma/client';

@ObjectType()
export class Rti {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field(() => String)
  user_uid: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  address: string;

  @Field(() => Float)
  mobile: number;

  @Field(() => String)
  subject_info: string;

  @Field(() => Date)
  from_date: Date;

  @Field(() => Date)
  to_date: Date;

  @Field(() => String)
  description: string;

  @Field(() => String)
  information: string;

  @Field(() => String)
  proverty_line_url: string;

  @Field(() => Agree)
  iagree: Agree;

  @Field(() => String)
  remarks: string;

  @Field(() => String)
  signature_url: string;

  @Field(() => String)
  attachments: string;

  @Field(() => Status)
  form_status: Status;

  @Field(() => String)
  rejection_reason: string;

  @Field(() => Status)
  certificate_id: string;

  @Field(() => Date)
  certificate_date: Date;

  @Field(() => String)
  certificate_url: string;

  @Field(() => String)
  comments_dept: string;

  @Field(() => String)
  condition_to_follow: string;

  @Field(() => Status)
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date)
  deletedAt: Date;
}
