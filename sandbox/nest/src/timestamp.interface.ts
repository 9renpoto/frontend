import { Field, Int } from 'type-graphql'
import { Column } from 'typeorm'

export abstract class TimeStamp {
  @Field(() => Int)
  @Column('smallint')
  createdAt: number

  @Field(() => Int)
  @Column('smallint')
  updatedAt: number
}
