import { Injectable } from '@nestjs/common'
import { NewRecipeInput } from './dto/new-recipe.input'
import { RecipesArgs } from './dto/recipes.args'
import { Recipe } from './models/recipe'

@Injectable()
export class RecipesService {
  private recipes: Recipe[]

  async create(data: NewRecipeInput): Promise<Recipe> {
    const r: Recipe = {
      id: btoa(Math.random().toString()),
      createdAt: new Date(),
      ...data,
    }

    this.recipes.push(r)
    return r
  }

  async findOneById(id: string): Promise<Recipe | undefined> {
    return this.recipes.find(r => r.id === id)
  }

  async findAll({ take }: RecipesArgs): Promise<Recipe[]> {
    return this.recipes.slice(0, take)
  }

  async remove(id: string): Promise<boolean> {
    this.recipes = this.recipes.filter(r => r.id === id)
    return true
  }
}
