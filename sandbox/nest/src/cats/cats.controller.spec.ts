import { Test } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('Cats Controller', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    controller = module.get(CatsController);
  });

  it('should be defined', () => expect(controller).toBeDefined());
});
