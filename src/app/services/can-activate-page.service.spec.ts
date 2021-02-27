import { TestBed } from '@angular/core/testing';

import { CanActivatePageService } from './can-activate-page.service';

describe('CanActivatePageService', () => {
  let service: CanActivatePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActivatePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
