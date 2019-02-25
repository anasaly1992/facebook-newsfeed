import { TestBed } from '@angular/core/testing';

import { NewsfeedServiceService } from './newsfeed-service.service';

describe('NewsfeedServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsfeedServiceService = TestBed.get(NewsfeedServiceService);
    expect(service).toBeTruthy();
  });
});
