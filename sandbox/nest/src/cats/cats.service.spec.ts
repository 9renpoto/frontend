import { Connection, getRepository } from 'typeorm'
import { createConnection, cleanDB } from '../testing/testing.utils'
import { CatsService } from './cats.service'
import { Cat } from './models/cat'
import { CatFactory } from './models/cat.factory'

describe('CatsService', () => {
  let service: CatsService
  let connection: Connection

  beforeAll(async () => {
    connection = await createConnection()
    service = new CatsService(getRepository(Cat))
  })

  afterAll(() => connection.close())
  afterEach(() => cleanDB(connection))

  it('should be defined', () => expect(service).toBeDefined())

  it('CatFactory', async () => {
    const cat = await CatFactory.create()
    expect(cat.name).toMatchInlineSnapshot(`"陸斗 小林"`)
  })

  it('create / findAll', async () => {
    const cat = await service.create(CatFactory.build())
    expect(cat.name).toMatchInlineSnapshot(`"陸斗 小林"`)
    expect(await service.findAll()).toHaveLength(1)
    expect(await service.findOneById(1)).toMatchInlineSnapshot(`undefined`)
    const res = (await service.findOneById(cat.id)) as Cat
    expect(res.name).toEqual(cat.name)
  })
})
