import {
  getRepository,
  Connection,
  createConnection as createDBConnection,
} from 'typeorm'
import { Recipe } from '../recipes/models/recipe'
import { Cat } from '../cats/models/cat'

const entities = [Cat, Recipe]

export function createConnection() {
  return createDBConnection({
    type: 'postgres',
    database: 'thinking_face',
    username: 'postgres',
    password: 'password',
    synchronize: true,
    entities,
  })
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
