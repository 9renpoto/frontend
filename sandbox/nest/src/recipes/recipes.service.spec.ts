import { random } from 'faker'
import { Connection, getRepository } from 'typeorm'
import { createConnection, cleanDB } from '../testing/testing.utils'
import { RecipesService } from './recipes.service'
import { Recipe } from './models/recipe'

describe('RecipesService', () => {
  let service: RecipesService
  let connection: Connection

  beforeAll(async () => {
    connection = await createConnection()
    service = new RecipesService(getRepository(Recipe))
  })

  afterAll(() => connection.close())
  afterEach(() => cleanDB(connection))

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

    expect(await service.findAll()).toMatchInlineSnapshot(`
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
