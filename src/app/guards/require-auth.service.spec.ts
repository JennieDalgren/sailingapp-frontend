import { TestBed, inject } from '@angular/core/testing';

import { RequireAuthService } from './require-auth.service';

describe('RequireAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequireAuthService]
    });
  });

  it('should be created', inject([RequireAuthService], (service: RequireAuthService) => {
    expect(service).toBeTruthy();
  }));
});
