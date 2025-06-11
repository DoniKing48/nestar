import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, Length } from "class-validator"
import { MemberType } from "../../enums/member.enum";

@InputType()
export class MemberInput {
  @IsNotEmpty()
  @Length(3, 12)
  @Field(() => String)
  memberNick: string;

  @IsNotEmpty()
  @Length(8, 16)
  @Field(() => String)
  memberPassword: string;
  
  @IsNotEmpty()
  @Field(() => String)
  memberPhone: string;  

  @IsOptional()
  @Field(() => MemberType, { nullable: true })
  memberType?:MemberType;

  @IsOptional()
  @Field(() => MemberType, { nullable: true })
  memberAuthType?:MemberType;  
}

@InputType()
export class LoginInput {
  @IsNotEmpty()
  @Length(3, 12)
  @Field(() => String)
  memberNick: string;

  @IsNotEmpty()
  @Length(8, 16)
  @Field(() => String)
  memberPassword: string;
}