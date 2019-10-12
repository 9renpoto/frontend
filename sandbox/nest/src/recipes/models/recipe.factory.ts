import { Factory } from 'typeorm-factory'
import { random, lorem } from 'faker'
import { Recipe } from './recipe'

export const RecipeFactory = new Factory(Recipe)
  .attr('title', random.words())
  .attr('description', lorem.sentences())
