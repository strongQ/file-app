import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import {  IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  username:string='';
  tab1Root = 'HomePage';
  constructor(public navParams: NavParams) {

    this.username=this.navParams.get('username');
  }
}
