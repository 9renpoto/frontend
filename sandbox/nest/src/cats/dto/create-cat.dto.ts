import { Min } from 'class-validator'
import { Field, Int, InputType } from 'type-graphql'

@InputType()
export class CreateCatDto {
  @Field(_ => Int)
  @Min(1)
  age: number
}
