/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';

describe('Service: Authentication', () => {
  beforeEach(() => {
    addProviders([AuthenticationService]);
  });

  it('should ...',
    inject([AuthenticationService],
      (service: AuthenticationService) => {
        expect(service).toBeTruthy();
      }));
});
