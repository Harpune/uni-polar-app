import {Component} from '@angular/core';
import {PolarDataProvider} from "../../providers/polar-data/polar-data";
import {LocalDataProvider} from "../../providers/local-data/local-data";

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})

export class UserPage {
  user: any = [];

  constructor(public localData: LocalDataProvider,
              public polarData: PolarDataProvider) {
  }

  ionViewDidLoad() {

    this.localData.getUser()
      .then(success => {
        this.user = success;
      }, error => {
        console.log('User Page', 'Get User', error);
      }).then(() => {
      this.getUserData().then(user => {
        this.user = user;
        console.log('User Page', 'Get User Data', 'success', user);
      }, error => {
        console.log('User Page', 'Get User Data', 'error', error);
      });
    })
  }

  getUserData(): Promise<any> {
    return new Promise(((resolve, reject) => {
      this.polarData.getUserInformation().then(success => {
        resolve(success);
      }, error => {
        reject(error);

      });
    }));
  }
}
