import { Component } from '@angular/core';

@Component({
  selector: 'contact-page',
  template: `
    <ion-header>
      <!-- seems like color is not working in alpha.10 -->
      <ion-toolbar color="dark">
        <ion-title>
          Contact
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-list-header>Follow us on Twitter</ion-list-header>
        <ion-item>
          <ion-icon name="ionic" item-start></ion-icon>
          @ionicframework
        </ion-item>
      </ion-list>
    </ion-content>
  `,
})
export class ContactPage {}
