import { Component} from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})


export class ErrorPageComponent {


  public warningMessage:string = 'Por favor, não acorde o Snorlax.';

  hoverMessage(){
    this.warningMessage = 'Eu avisei...'
  }

  outMessage(){
    this.warningMessage = 'Por favor, não acorde o Snorlax.';
  }
}
