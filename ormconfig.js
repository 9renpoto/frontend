const path = require('path')
const { SnakeNamingStrategy } = require('typeorm-naming-strategies')

const rootDir = `sandbox/nest`
const host = process.env.DATABASE_HOST || `127.0.0.1`

module.exports = {
  type: 'postgres',
  host,
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'thinking_face',
  charset: 'utf8mb4',
  entities: [path.join(rootDir, 'src/**/models/*.ts')],
  synchronize: false,
  migrations: [path.join(rootDir, 'db/migrations/**/*.ts')],
  subscribers: [path.join(rootDir, 'db/subscribers/**/*.ts')],
  cli: {
    entitiesDir: [path.join(rootDir, '**/')],
    migrationsDir: path.join(rootDir, 'db/migrations'),
    subscribersDir: path.join(rootDir, 'db/subscribers'),
  },
  namingStrategy: new SnakeNamingStrategy(),
  logging: 'all',
}
