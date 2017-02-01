/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ZonasvalorserviceService } from './zonasvalorservice.service';

describe('ZonasvalorserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZonasvalorserviceService]
    });
  });

  it('should ...', inject([ZonasvalorserviceService], (service: ZonasvalorserviceService) => {
    expect(service).toBeTruthy();
  }));
});
