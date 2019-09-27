import { ParseIntPipe, UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { CatsGuard } from './cats.guard'
import { CatsService } from './cats.service'
import { CreateCatDto } from './dto/create-cat.dto'
import { Cat } from './models/cat'

const pubSub = new PubSub()

@Resolver((_: unknown) => Cat)
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query(_ => [Cat])
  @UseGuards(CatsGuard)
  async getCats() {
    return await this.catsService.findAll()
  }

  @Query(_ => Cat)
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ) {
    return await this.catsService.findOneById(id)
  }

  @Mutation(_ => Cat)
  async create(@Args('createCatInput') args: CreateCatDto) {
    const createdCat = await this.catsService.create(args)
    pubSub.publish('catCreated', { catCreated: createdCat })
    return createdCat
  }

  @Subscription(_ => Cat)
  catCreated() {
    return pubSub.asyncIterator('catCreated')
  }
}
