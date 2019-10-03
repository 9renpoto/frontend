import { Test, TestingModule } from '@nestjs/testing'
import { random } from 'faker'
import { CatsService } from './cats.service'

describe('CatsService', () => {
  let service: CatsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile()

    service = module.get(CatsService)
  })

  it('should be defined', () => expect(service).toBeDefined())

  it('create / findAll', () => {
    const cat = {
      name: random.word(),
      age: random.number(),
      breed: random.word(),
    }
    expect(service.create(cat)).toMatchInlineSnapshot(`
      Object {
        "age": 55131,
        "breed": "monitor",
        "createdAt": 1577804400,
        "id": 49111,
        "name": "Quality-focused",
        "updatedAt": 1577804400,
      }
    `)
    expect(service.findAll()).toMatchInlineSnapshot(`
      Array [
        Object {
          "age": 5,
          "createdAt": 1568780709,
          "id": 1,
          "name": "Cat",
          "updatedAt": 1550779881,
        },
        Object {
          "age": 55131,
          "breed": "monitor",
          "createdAt": 1577804400,
          "id": 49111,
          "name": "Quality-focused",
          "updatedAt": 1577804400,
        },
      ]
    `)
    expect(service.findOneById(1)).toMatchInlineSnapshot(`
      Object {
        "age": 5,
        "createdAt": 1568780709,
        "id": 1,
        "name": "Cat",
        "updatedAt": 1550779881,
      }
    `)
  })
})
