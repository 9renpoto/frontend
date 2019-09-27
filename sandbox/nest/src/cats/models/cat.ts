import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class Cat {
  @Field(_ => ID)
  id: number

  @Field()
  name: string

  @Field()
  age: number
}
