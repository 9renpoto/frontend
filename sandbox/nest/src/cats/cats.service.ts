import { Injectable } from '@nestjs/common'
import { random } from 'faker'
import { Cat } from './models/cat'
import { CreateCatDto } from './dto/create-cat.dto'

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [{ id: 1, name: 'Cat', age: 5 }]

  create(cat: CreateCatDto): Cat {
    const newCat = {
      id: random.number(),
      name: random.word(),
      ...cat,
    }
    this.cats.push(newCat)
    return newCat
  }

  findAll(): Cat[] {
    return this.cats
  }

  findOneById(id: number) {
    return this.cats.find(cat => cat.id === id)
  }
}
