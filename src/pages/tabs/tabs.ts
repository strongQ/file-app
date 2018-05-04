import { Component } from '@angular/core';
import {   NavParams } from 'ionic-angular';

import {  IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  username:string='';
  tab1Root = 'HomePage';
  constructor(public navParams: NavParams) {

    this.username=this.navParams.get('username');
  }
}
