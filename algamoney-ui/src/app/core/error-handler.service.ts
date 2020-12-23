import { Injectable } from '@angular/core';

import { ToastyService } from 'ng2-toasty';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private toastyService: ToastyService) { }

  handle(errorResponse: any) {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;
    } else {
      msg = 'Erro ao processar servico remoto. Tente novamente.';
      console.log('Ocorreu um erro', errorResponse);
    }
    this.toastyService.error(msg);
  }
}
