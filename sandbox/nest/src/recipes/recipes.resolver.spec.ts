import { Test, TestingModule } from '@nestjs/testing'
import { Connection } from 'typeorm'
import { getRepositoryToken } from '@nestjs/typeorm'
import { cleanDB, createConnection } from '../testing/testing.utils'
import { RecipesResolver } from './recipes.resolver'
import { RecipesService } from './recipes.service'
import { Recipe } from './models/recipe'
import { RecipeFactory } from './models/recipe.factory'

describe('RecipesResolver', () => {
  let resolver: RecipesResolver
  let connection: Connection

  beforeAll(async () => {
    connection = await createConnection()
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RecipesResolver,
        RecipesService,
        {
          provide: getRepositoryToken(Recipe),
          useValue: {
            findOne: () => RecipeFactory.build(),
          },
        },
      ],
    }).compile()

    resolver = module.get<RecipesResolver>(RecipesResolver)
  })

  afterAll(() => connection.close())
  afterEach(() => cleanDB(connection))

  it('should be defined', () => expect(resolver).toBeDefined())

  it('recipe', async () => {
    expect(await resolver.recipe('1')).toMatchInlineSnapshot(`
      Recipe {
        "description": "Quos nihil dolor voluptatibus velit nobis culpa deleniti. Reprehenderit in nisi et. Quia odio et inventore eligendi in deserunt id. Sit odio quia vitae provident quo provident molestiae. Ullam pariatur quos est quod laborum ea quisquam.",
        "title": "port eyeballs Rufiyaa",
      }
    `)
  })
})
