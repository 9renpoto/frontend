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

    expect(res.ingredients).toMatchInlineSnapshot(`
      Array [
        "sensor",
        "users",
        "Administrator",
      ]
    `)
  })
})
