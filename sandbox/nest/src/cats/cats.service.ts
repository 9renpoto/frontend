import { Injectable } from '@nestjs/common'
import { Cat } from './models/cat'
import { CreateCatDto } from './dto/create-cat.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly cats: Repository<Cat>,
  ) {}

  async create(cat: CreateCatDto) {
    return this.cats.save(cat)
  }

  async findAll() {
    return this.cats.find()
  }

  async findOneById(id: number) {
    return this.cats.findOne(id)
  }
}
