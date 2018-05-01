import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { DishdetailPage } from '../dishdetail/dishdetail';

/**
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {

  comments: FormGroup;  
  star: number = 3;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder ) {


      this.comments = this.formBuilder.group({
        rating: [3],
        author: [''],
        comment: [''],
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  onSubmit() {
    console.log(this.comments.value);
    this.viewCtrl.dismiss(Comment);
  }
  

  
 }

