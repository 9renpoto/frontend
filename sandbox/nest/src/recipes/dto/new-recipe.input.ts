import { IsOptional, Length, MaxLength } from 'class-validator'
import { Field, InputType } from 'type-graphql'

@InputType()
export class NewRecipeInput {
  @Field()
  @MaxLength(30)
  title: string

  @Field({ nullable: true })
  @Length(30, 255)
  @IsOptional()
  description?: string

  @Field(() => [String])
  ingredients: string[]
}
