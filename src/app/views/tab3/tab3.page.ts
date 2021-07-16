import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ThemeableBrowserOptions, ThemeableBrowser, ThemeableBrowserObject } from '@ionic-native/themeable-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public actionSheetController: ActionSheetController,private iab: InAppBrowser, private socialsharing: SocialSharing, private themeableBrowser: ThemeableBrowser) {}

  openBrowser(){this.iab.create('https://www.policlinico.mi.it/donazioni-lotta-al-coronavirus#Come-donare')
 
}
openPrivacy(){this.iab.create('http://giacomovenier.pythonanywhere.com/privacy/covid')
}
async  shareNow(){
  var message =`Ciao, scarica l'app: COVID-19 Italia.\n \n Ti permetterà di restare aggiornato sullo sviluppo del virus.`;
  await this.socialsharing.share(message)
}
async showActionsheet() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Info',
    cssClass: 'androidActionsheet',
    buttons: [
      {
        text: 'Condividi',
        handler: () => {
          this.shareNow();
        }
      },
      {
        text: 'Dona',
        handler: () => {
          this.openBrowser();
        }
      },
      {
        text: 'Privacy',
        handler: () => {
          this.openPrivacy();
        }
      },
      { text: 'Annulla', role: 'cancel' }
    ]
  });

  await actionSheet.present();
}

}