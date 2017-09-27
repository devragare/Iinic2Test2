import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  perPage: number;
  sort: string;
  subreddit: string;

  constructor(public view: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.perPage = this.navParams.get('perPage');
    this.sort = this.navParams.get('sort');
    this.subreddit = this.navParams.get('subreddit');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  save(): void {
    let settings = {
      perPage: this.perPage,
      sort: this.sort,
      subreddit: this.subreddit
    };
    this.view.dismiss(settings);
  }

  close(): void {
    this.view.dismiss();
  }

}
