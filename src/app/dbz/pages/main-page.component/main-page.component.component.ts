import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzServicesTsService  as DbzService} from '../../services/dbz.services.ts.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.component.html',
  styleUrls: ['./main-page.component.component.css']
})
export class MainPageComponentComponent {
  constructor( private dbzService: DbzService ) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ):void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character: Character ):void {
    this.dbzService.addCharacter( character );
  }
}
