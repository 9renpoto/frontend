import { Module } from '@nestjs/common'
import { CatsResolver } from './cats.resolver'
import { CatsService } from './cats.service'

@Module({
  providers: [CatsService, CatsResolver],
})
export class CatsModule {}
