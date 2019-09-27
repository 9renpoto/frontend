import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { CatsModule } from './cats/cats.module'
import { RecipesModule } from './recipes/recipes.module'

@Module({
  imports: [
    CatsModule,
    RecipesModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql', './*.graphql'],
      installSubscriptionHandlers: true,
      // autoSchemaFile: './src/schema.graphql',
    }),
  ],
})
export class ApplicationModule {}
