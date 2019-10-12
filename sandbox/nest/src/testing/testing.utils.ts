import {
  getRepository,
  Connection,
  createConnection as createDBConnection,
  getConnection,
} from 'typeorm'
import { Recipe } from '../recipes/models/recipe'
import { Cat } from '../cats/models/cat'

const entities = [Cat, Recipe]

export function createConnection() {
  try {
    return createDBConnection({
      type: 'postgres',
      database: 'postgres',
      username: 'postgres',
      password: 'password',
      entities,
    })
  } catch {
    return getConnection()
  }
}

export async function cleanDB(connection: Connection) {
  try {
    for (const entity of entities) {
      const repo = await getRepository(entity)
      await repo.query(`DELETE FROM ${repo.metadata.tableName};`)
    }
  } catch (err) {
    connection.close()
    throw new Error(`ERROR: Cleaning test db: ${err}`)
  }
}
