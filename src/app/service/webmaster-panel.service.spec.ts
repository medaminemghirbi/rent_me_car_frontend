import { TestBed } from '@angular/core/testing';

import { WebmasterPanelService } from './webmaster-panel.service';

describe('WebmasterPanelService', () => {
  let service: WebmasterPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebmasterPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
