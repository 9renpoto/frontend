import { Factory } from 'typeorm-factory'
import { name, random } from 'faker'
import { Cat } from './cat'

export const CatFactory = new Factory(Cat)
  .attr('name', name.findName())
  .attr('age', random.number())
