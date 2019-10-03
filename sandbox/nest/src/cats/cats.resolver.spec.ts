import { Test } from '@nestjs/testing'
import { random } from 'faker'
import { CatsResolver } from './cats.resolver'
import { CatsService } from './cats.service'

describe('CatsResolver', () => {
  let resolver: CatsResolver

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CatsResolver, CatsService],
    }).compile()

    resolver = module.get(CatsResolver)
  })

  it('should be defined', () => expect(resolver).toBeDefined())

  it('findAll', async () => {
    const res = await resolver.getCats()
    expect(res).toMatchInlineSnapshot(`
      Array [
        Object {
          "age": 5,
          "createdAt": 1568780709,
          "id": 1,
          "name": "Cat",
          "updatedAt": 1550779881,
        },
      ]
    `)
  })

  it('find', async () => {
    const res = await resolver.findOneById(1)
    expect(res).toMatchInlineSnapshot(`
      Object {
        "age": 5,
        "createdAt": 1570650411,
        "id": 1,
        "name": "Cat",
        "updatedAt": 1534228910,
      }
    `)
  })

  it('create', async () => {
    const res = await resolver.create({ age: random.number() })
    expect(res).toMatchInlineSnapshot(`
      Object {
        "age": 71946,
        "createdAt": 1577804400,
        "id": 49111,
        "name": "users",
        "updatedAt": 1577804400,
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
