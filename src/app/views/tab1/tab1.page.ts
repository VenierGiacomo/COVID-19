import { Component, OnInit } from '@angular/core';
import { CovidData }  from 'src/app/dataregioni';
import { ItaCovidData }  from 'src/app/dataitaly';
import { ModalController, Platform } from '@ionic/angular';
import { RegionStatPage } from  '../../modals/region-stat/region-stat.page'
import { ItaliaStatPage } from '../../modals/italia-stat/italia-stat.page'
import { CodePush, InstallMode } from '@ionic-native/code-push/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private dataService: DataService, private http:HTTP, private codePush: CodePush, public modalController: ModalController, private plt: Platform) {}
  regionsdata= []
   tweets:any = []
  err = false
  currentModal = null
  dateCheck: any = ''
  italy=[]
  async ionViewDidEnter() {
     var date = new Date
     var now = date.getTime()
    //  this.getTwett()
     if (this.dateCheck == '' || (now-this.dateCheck) >= 120000 ){
         this.dateCheck = date.getTime()
         this.plt.ready().then(() => {
          this.codePush.sync({ installMode: InstallMode.IMMEDIATE, mandatoryInstallMode: InstallMode.IMMEDIATE}).subscribe((syncStatus) => {
          });
        })
      }
    }
  ngOnInit(){
    var italydata = ItaCovidData.data
    var today = "2020-03-15 17:00:00"
    for (let dati of italydata){
      if  (dati.data == today){
        var ita= {
          nome: "Italia",
          totale_casi: dati.totale_casi,
          dimessi_guariti: dati.dimessi_guariti,
          deceduti: dati.deceduti  
        }
        this.italy.push(ita)
      }
    }
    var regiondata = CovidData.data
    var today = "2020-03-15 17:00:00"
    for ( let dati of regiondata){
      if  (dati.data == today){
        var reg = {
          nome: dati.denominazione_regione,
          totale_casi: dati.totale_casi,
          dimessi_guariti: dati.dimessi_guariti,
          deceduti: dati.deceduti
        }
        this.regionsdata.push(reg)
      }
    }
    
     /*var date = new Date()
    var day = date.getDay()
    var year = date.getFullYear()
    var month = date.getMonth()+1
    /var today = `${year}-${month}-${day} 18:00:00`
    console.log(today)*/
  
  }
  async presentModal(regione) {
    const modal = await this.modalController.create({
      component:RegionStatPage,
      swipeToClose: true,
      componentProps: { 
        nome: regione.nome
      }
    });
    return await modal.present();
  }
  async presentItaliaModal(italia) {
    const modal = await this.modalController.create({
      component:ItaliaStatPage,
      swipeToClose: true,
      componentProps: { 
        nome: italia.nome
      }
    });
    return await modal.present();
  }
  async getTwett(){
      this.http.get('http://giacomovenier.pythonanywhere.com/tweetscovid',{},{}).then(response => {
      var res = response.data
      this.dataService.setData('tweets', res)
      console.log('done')
      })
    }
  
}
