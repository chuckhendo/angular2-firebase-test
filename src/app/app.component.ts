import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import '../../public/css/styles.scss';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')]
})
export class AppComponent {
    items: FirebaseListObservable<any[]>;
    itemName: string;

    constructor(af: AngularFire) {
        this.items = af.database.list("/items");
        this.itemName = "";
    }

    addItem(e: Event) {
        e.preventDefault();
        this.items.push({
            name: this.itemName
        });
        this.clear();
    }

    clear() {
        this.itemName = "";
    }
}