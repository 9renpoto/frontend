import { IsNotEmpty } from 'class-validator';
import { Cat } from '../interfaces/cat.interface';

export class CreateCatDto implements Cat {
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly age: number;
  @IsNotEmpty()
  readonly breed: string;
}
