import { TestBed } from '@angular/core/testing';

import { DbzServicesTsService } from './dbz.services.ts.service';

describe('DbzServicesTsService', () => {
  let service: DbzServicesTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbzServicesTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
