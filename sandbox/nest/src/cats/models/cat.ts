import { Field, ID, ObjectType } from 'type-graphql'
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('Cats')
@ObjectType()
export class Cat {
  @PrimaryGeneratedColumn()
  @Field(_ => ID)
  id: number

  @Column('varchar')
  @Field()
  name: string

  @Column('smallint')
  @Field()
  age: number
}
