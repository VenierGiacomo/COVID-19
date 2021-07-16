import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  tweets:any = []
  err = false
  constructor(public loadingController: LoadingController,private themeableBrowser: ThemeableBrowser, private iab: InAppBrowser, private socialsharing: SocialSharing, private http:HTTP) {}

async ngOnInit(){
  this.handleButtonClick()
  await this.http.get('http://giacomovenier.pythonanywhere.com/tweetscovid',{},{}).then(response => {
    var res = response.data
    this.tweets = JSON.parse(res).list
    console.log(res,'res',typeof res, 'type', this.tweets,'TWEETS', this.tweets.list)
    this.err = false
    for(let tweet of this.tweets){
      tweet.url= tweet.text.substr(-23)
      var length = tweet.name.length
      tweet.name = tweet.name.substring(0, Math.min(tweet.name.length, 16))
      var length1 = tweet.name.length
      if (length != length1){
        tweet.name = tweet.name + ' ...'
      }
      if(tweet.url.substring(0, 4) != 'http'){
        tweet.display = 'none'
      }
      else{
        tweet.display = 'block'
      }
      tweet.text = tweet.text.replace(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi, '') 
    }
}).catch(error =>{
  this.err = true
  console.log(error.status);
  console.log(error.error); // error message as string
  console.log(error.headers)

})
}
async getTwett(){
  this.handleButtonClick() 
  this.http.get('http://giacomovenier.pythonanywhere.com/tweetscovid',{},{}).then(response => {
    var res = response.data
    this.tweets = JSON.parse(res).list
    console.log(res,'res',typeof res, 'type', this.tweets,'TWEETS', this.tweets.list)
    this.err = false
    for(let tweet of this.tweets){
      tweet.url= tweet.text.substr(-23)
      var length = tweet.name.length
      tweet.name = tweet.name.substring(0, Math.min(tweet.name.length, 16))
      var length1 = tweet.name.length
      if (length != length1){
        tweet.name = tweet.name + ' ...'
      }
      if(tweet.url.substring(0, 4) != 'http'){
        tweet.display = 'none'
      }
      else{
        tweet.display = 'block'
      }
      tweet.text = tweet.text.replace(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi, '')
    }
}).catch(error =>{
  this.err = true
  console.log(error.status);
  console.log(error.error); // error message as string
  console.log(error.headers)

})
}
refr(event){
  this.getTwett()
  setTimeout(() => {
    event.target.complete();
  }, 2000);
}
async  shareNow(){
  var message =`Ciao, scarica l'app Emergenza Coronavirus. \n \n Ti permetterà di restare aggiornato sullo sviluppo del virus.`;
  await this.socialsharing.share(message)
}

async showOriginal(url){
  const options: ThemeableBrowserOptions = {
  statusbar: {
    color: '#00000000'
},
  toolbar: {
    height: 44,
    color: '#00000000'
  },
  
  closeButton: {
    wwwImage: 'assets/icon/x-mark.png',
    align: 'left',
    event: 'closePressed'
  },
}

const browser: ThemeableBrowserObject = this.themeableBrowser.create(url, '_blank', options)
browser.on("ThemeableBrowserError").subscribe(res =>{
})
browser.on("ThemeableBrowserWarning").subscribe(res =>{
  if(res.message =='Show called but already shown'){
    browser.close()
    this.showOriginal(url)
  }
})
}
async handleButtonClick() {
  const loading = await this.loadingController.create({
    message: 'Scaricando tweet...',
    duration: 2500
  });
  await loading.present();
}
}
