import { Test } from '@nestjs/testing'
import { random } from 'faker'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { createConnection, cleanDB } from '../testing/testing.utils'
import { CatsResolver } from './cats.resolver'
import { CatsService } from './cats.service'
import { Cat } from './models/cat'
import { CatFactory } from './models/cat.factory'

describe('CatsResolver', () => {
  let resolver: CatsResolver
  let connection: Connection

  beforeAll(async () => {
    connection = await createConnection()
    const module = await Test.createTestingModule({
      providers: [
        CatsResolver,
        CatsService,
        {
          provide: getRepositoryToken(Cat),
          useValue: {
            find: () => CatFactory.buildList(3),
            findOne: () => CatFactory.build(),
            save: () => CatFactory.build(),
          },
        },
      ],
    }).compile()

    resolver = module.get(CatsResolver)
  })

  afterAll(() => connection.close())
  afterEach(() => cleanDB(connection))

  it('should be defined', () => expect(resolver).toBeDefined())

  it('findAll', async () => {
    const res = await resolver.cats()
    expect(res).toMatchInlineSnapshot(`
      Array [
        Cat {
          "age": 22685,
          "name": "陸斗 小林",
        },
        Cat {
          "age": 22685,
          "name": "陸斗 小林",
        },
        Cat {
          "age": 22685,
          "name": "陸斗 小林",
        },
      ]
    `)
  })

  it('find', async () => {
    const res = await resolver.cat(1)
    expect(res).toMatchInlineSnapshot(`
      Cat {
        "age": 22685,
        "name": "陸斗 小林",
      }
    `)
  })

  it('create', async () => {
    const res = await resolver.create({ age: random.number() })
    expect(res).toMatchInlineSnapshot(`
      Cat {
        "age": 22685,
        "name": "陸斗 小林",
      }
    `)
  })

  it('catCreated', async () => {
    const res = resolver.catCreated()
    expect(res).toMatchInlineSnapshot(`
      PubSubAsyncIterator {
        "allSubscribed": null,
        "eventsArray": Array [
          "catCreated",
        ],
        "pubsub": PubSub {
          "ee": EventEmitter {
            "_events": Object {},
            "_eventsCount": 0,
            "_maxListeners": undefined,
          },
          "subIdCounter": 0,
          "subscriptions": Object {},
        },
        "pullQueue": Array [],
        "pushQueue": Array [],
        "running": true,
      }
    `)
  })
})
