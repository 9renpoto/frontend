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
        "age": 28613,
        "breed": "eyeballs",
        "id": 69088,
        "name": "Swedish Krona",
      }
    `)
    expect(service.findAll()).toMatchInlineSnapshot(`
      Array [
        Object {
          "age": 5,
          "id": 1,
          "name": "Cat",
        },
        Object {
          "age": 28613,
          "breed": "eyeballs",
          "id": 69088,
          "name": "Swedish Krona",
        },
      ]
    `)
    expect(service.findOneById(1)).toMatchInlineSnapshot(`
      Object {
        "age": 5,
        "id": 1,
        "name": "Cat",
      }
    `)
  })
})
