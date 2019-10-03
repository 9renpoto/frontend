import { Injectable } from '@nestjs/common'
import { random, date } from 'faker'
import dayjs from 'dayjs'
import { Cat } from './models/cat'
import { CreateCatDto } from './dto/create-cat.dto'

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    {
      id: 1,
      name: 'Cat',
      age: 5,
      createdAt: dayjs(date.past(1)).unix(),
      updatedAt: dayjs(date.past(2)).unix(),
    },
  ]

  create(cat: CreateCatDto): Cat {
    const newCat = {
      id: random.number(),
      name: random.word(),
      ...cat,
      createdAt: dayjs().unix(),
      updatedAt: dayjs().unix(),
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
