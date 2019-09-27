import { join } from 'path'
import { GraphQLDefinitionsFactory } from '@nestjs/graphql'

const definitionsFactory = new GraphQLDefinitionsFactory()
definitionsFactory.generate({
  typePaths: ['./src/schema.gql'],
  path: join(process.cwd(), 'src/graphql.schema.ts'),
  outputAs: 'interface',
})
