import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { CatsModule } from './cats/cats.module'
import { RecipesModule } from './recipes/recipes.module'

@Module({
  imports: [
    CatsModule,
    RecipesModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: `./src/schema.gql`,
    }),
  ],
})
export class ApplicationModule {}
