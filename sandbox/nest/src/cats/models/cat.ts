import { Field, ID, ObjectType } from 'type-graphql'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('cats')
@ObjectType()
export class Cat {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number

  @Column('varchar')
  @Field()
  name: string

  @Column('smallint')
  @Field()
  age: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
