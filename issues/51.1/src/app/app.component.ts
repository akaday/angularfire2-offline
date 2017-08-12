import { Component } from '@angular/core';

import {
  AngularFireOfflineDatabase,
  AfoListObservable,
  AfoObjectObservable
} from 'angularfire2-offline/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  groceries: AfoListObservable<any[]>;
  constructor(private afoDatabase: AngularFireOfflineDatabase) {
    this.groceries = this.afoDatabase.list('groceries');
  }

  addMilk() {
    this.groceries.push({text: 'Milk'});
  }
}