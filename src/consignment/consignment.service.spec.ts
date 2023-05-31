import { Test, TestingModule } from '@nestjs/testing';
import { ConsignmentService } from './consignment.service';

describe('ConsignmentService', () => {
  let service: ConsignmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsignmentService],
    }).compile();

    service = module.get<ConsignmentService>(ConsignmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
