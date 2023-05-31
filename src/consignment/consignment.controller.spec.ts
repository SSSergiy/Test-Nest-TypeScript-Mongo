import { Test, TestingModule } from '@nestjs/testing';
import { ConsignmentController } from './consignment.controller';

describe('ConsignmentController', () => {
  let controller: ConsignmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsignmentController],
    }).compile();

    controller = module.get<ConsignmentController>(ConsignmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
