/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoronaServiceService } from './corona-service.service';

describe('Service: CoronaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoronaServiceService]
    });
  });

  it('should ...', inject([CoronaServiceService], (service: CoronaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
