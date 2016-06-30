import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { AppComponent } from './app/app.component';
if (process.env.ENV === 'production') {
  enableProdMode();
}
bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyDYXok_2ZxJ56ZJWN43NppbV82BF9vUjzk",
    authDomain: "angular2-test-18028.firebaseapp.com",
    databaseURL: "https://angular2-test-18028.firebaseio.com",
    storageBucket: "angular2-test-18028.appspot.com"
  })
]);