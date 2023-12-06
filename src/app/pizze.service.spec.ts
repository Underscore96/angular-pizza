import { TestBed } from '@angular/core/testing';

import { PizzeService } from './pizze.service';

describe('PizzeService', () => {
  let service: PizzeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzeService],
    });
    service = TestBed.inject(PizzeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should calculate total correctly', () => {
    // aggiungiamo le pizze da calcolare
    service.pizzeNelCarrello = [
      { nome: 'Margherita', quantita: 1, prezzo: 10 },
      { nome: 'Pepperoni', quantita: 1, prezzo: 13 },
    ];

    // Calcola il totale complessivo
    const total = service.calcolaTotaleComplessivo();

    // guardiamo se il totale é corretto
    expect(total).toBe(33); // 1 * 10 + 1 * 13 = 10 + 13 = 23
  });
});
