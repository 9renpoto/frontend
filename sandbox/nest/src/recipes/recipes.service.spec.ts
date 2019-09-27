import { Test, TestingModule } from '@nestjs/testing'
import { random } from 'faker'
import { RecipesService } from './recipes.service'

describe('RecipesService', () => {
  let service: RecipesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipesService],
    }).compile()

    service = module.get<RecipesService>(RecipesService)
  })

  it('should be defined', () => expect(service).toBeDefined())

  it('create', async () => {
    const res = await service.create({
      title: random.words(),
      ingredients: random.words().split(' '),
    })

    expect(res).toMatchInlineSnapshot(`
      Object {
        "createdAt": 2019-12-31T15:00:00.000Z,
        "id": "a972665a-b573-40b6-9ba2-7218b86a4d7b",
        "ingredients": Array [
          "sensor",
          "users",
          "Administrator",
        ],
        "title": "port eyeballs Rufiyaa",
      }
    `)

    expect(await service.findAll({ take: 1, skip: 0 })).toMatchInlineSnapshot(`
      Array [
        Object {
          "createdAt": 2019-12-31T15:00:00.000Z,
          "id": "a972665a-b573-40b6-9ba2-7218b86a4d7b",
          "ingredients": Array [
            "sensor",
            "users",
            "Administrator",
          ],
          "title": "port eyeballs Rufiyaa",
        },
      ]
    `)
  })
})
