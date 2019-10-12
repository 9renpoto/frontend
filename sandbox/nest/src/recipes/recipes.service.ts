import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { NewRecipeInput } from './dto/new-recipe.input'
import { Recipe } from './models/recipe'

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipes: Repository<Recipe>,
  ) {}

  async create(data: NewRecipeInput) {
    return this.recipes.save(data)
  }

  async findOneById(id: string) {
    return this.recipes.findOne(id)
  }

  async findAll() {
    return this.recipes.find()
  }

  async remove(id: string) {
    return this.recipes.delete(id)
  }
}
