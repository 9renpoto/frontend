import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CatsModule } from './cats/cats.module'
import { RecipesModule } from './recipes/recipes.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'postgres',
      password: 'password',
      database: 'thinking_face',
      entities: ['src/**/models/*.ts'],
      synchronize: false,
      migrations: ['db/migrations/**/*.ts'],
      subscribers: ['db/subscribers/**/*.ts'],
    }),
    CatsModule,
    RecipesModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: `./src/schema.gql`,
    }),
  ],
})
export class ApplicationModule {}
