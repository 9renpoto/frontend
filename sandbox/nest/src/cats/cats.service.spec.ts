import { CatsService } from './cats.service'
import { Connection, getRepository } from 'typeorm'
import { createConnection, cleanDB } from '../testing/testing.utils'
import { Cat } from './models/cat'
import { CatFactory } from './models/cat.factory'

describe('CatsService', () => {
  let service: CatsService
  let connection: Connection

  beforeEach(() => {
    service = new CatsService(getRepository(Cat))
    return createConnection()
  })

  afterAll(() => connection.close())
  afterEach(() => cleanDB(connection))

  it('should be defined', () => expect(service).toBeDefined())

  it('CatFactory', async () => {
    const cat = await CatFactory.create()
    expect(cat.name).toMatchInlineSnapshot()
  })

  it.skip('create / findAll', () => {
    expect(service.create(CatFactory.build())).toMatchInlineSnapshot(`
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
