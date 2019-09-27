import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'

@Injectable()
export class CatsGuard implements CanActivate {
  canActivate(_: ExecutionContext) {
    return true
  }
}
