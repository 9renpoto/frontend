import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { CatsModule } from './cats/cats.module'
import { RecipesModule } from './recipes/recipes.module'

const file = 'schema.gql'

@Module({
  imports: [
    CatsModule,
    RecipesModule,
    GraphQLModule.forRoot({
      typePaths: [`./${file}`],
      installSubscriptionHandlers: true,
      autoSchemaFile: `./src/${file}`,
    }),
  ],
})
export class ApplicationModule {}
