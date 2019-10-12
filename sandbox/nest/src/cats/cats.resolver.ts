import { ParseIntPipe, UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { CatsGuard } from './cats.guard'
import { CatsService } from './cats.service'
import { CreateCatDto } from './dto/create-cat.dto'
import { Cat } from './models/cat'

@Resolver(() => Cat)
export class CatsResolver {
  private readonly pubSub = new PubSub()
  constructor(private readonly service: CatsService) {}

  @Query(() => [Cat])
  @UseGuards(CatsGuard)
  async cats() {
    return this.service.findAll()
  }

  @Query(() => Cat)
  async cat(
    @Args('id', ParseIntPipe)
    id: number,
  ) {
    return this.service.findOneById(id)
  }

  @Mutation(() => Cat)
  async create(@Args('createCatInput') args: CreateCatDto) {
    const createdCat = await this.service.create(args)
    this.pubSub.publish('catCreated', { catCreated: createdCat })
    return createdCat
  }

  @Subscription(() => Cat)
  catCreated() {
    return this.pubSub.asyncIterator('catCreated')
  }
}
