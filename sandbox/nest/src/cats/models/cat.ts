import { Field, ID, ObjectType } from 'type-graphql'
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { TimeStamp } from '../../timestamp.interface'

@Entity('Cats')
@ObjectType()
export class Cat extends TimeStamp {
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
