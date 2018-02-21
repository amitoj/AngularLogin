import { TestBed, inject } from '@angular/core/testing';

import { HideService } from './hide.service';

describe('HideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HideService]
    });
  });

  it('should be created', inject([HideService], (service: HideService) => {
    expect(service).toBeTruthy();
  }));
});
