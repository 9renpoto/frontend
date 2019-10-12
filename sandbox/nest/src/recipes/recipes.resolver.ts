import { NotFoundException } from '@nestjs/common'
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { PubSub } from 'apollo-server-express'
import { NewRecipeInput } from './dto/new-recipe.input'
import { Recipe } from './models/recipe'
import { RecipesService } from './recipes.service'

@Resolver(() => Recipe)
export class RecipesResolver {
  private readonly pubSub = new PubSub()
  constructor(private readonly recipesService: RecipesService) {}

  @Query(() => Recipe)
  async recipe(@Args('id') id: string): Promise<Recipe> {
    const recipe = await this.recipesService.findOneById(id)
    if (!recipe) {
      throw new NotFoundException(id)
    }
    return recipe
  }

  @Mutation(() => Recipe)
  async addRecipe(
    @Args('newRecipeData') newRecipeData: NewRecipeInput,
  ): Promise<Recipe> {
    const recipe = await this.recipesService.create(newRecipeData)
    this.pubSub.publish('recipeAdded', { recipeAdded: recipe })
    return recipe
  }

  @Subscription(() => Recipe)
  recipeAdded() {
    return this.pubSub.asyncIterator('recipeAdded')
  }
}
