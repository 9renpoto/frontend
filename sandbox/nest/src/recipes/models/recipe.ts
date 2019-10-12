import { Field, ID, ObjectType } from 'type-graphql'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@ObjectType()
@Entity('recipes')
export class Recipe {
  @Field(_ => ID)
  @PrimaryGeneratedColumn()
  id: string

  @Field()
  @Column()
  title: string

  @Field({ nullable: true })
  @Column()
  description?: string

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAt: Date

  @Field(_ => [String])
  ingredients: string[]
}
