import { TestBed } from '@angular/core/testing';

import { ContentTextService } from './content-text.service';

describe('ContentTextService', () => {
  let service: ContentTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
