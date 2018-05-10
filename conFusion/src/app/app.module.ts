import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// week1 add
import { AboutPage } from '../pages/about/about';
import { MenuPage } from '../pages/menu/menu';
import { ContactPage } from '../pages/contact/contact';
import { DishdetailPage } from '../pages/dishdetail/dishdetail';

// week2
import { FavoritesPage } from '../pages/favorites/favorites';
import { ReservationPage } from '../pages/reservation/reservation';
import { CommentsPage } from '../pages/comments/comments';

//week3
import { LoginPage } from '../pages/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { RegisterPage } from '../pages/register/register';

// week4
// import { Network } from '@ionic-native/network';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { EmailComposer } from '@ionic-native/email-composer';
import { SocialSharing } from '@ionic-native/social-sharing';
// import { CallNumber } from '@ionic-native/call-number';
// import { Camera } from '@ionic-native/camera';



// week1 delete
// import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DishProvider } from '../providers/dish/dish';
import { LeaderProvider } from '../providers/leader/leader';
import { PromotionProvider } from '../providers/promotion/promotion';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';


import { HttpModule } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { FavoriteProvider } from '../providers/favorite/favorite';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // ListPage, delete cause import was too
//week1
    AboutPage,  
    MenuPage,   
    ContactPage,
    DishdetailPage,
// week2
    FavoritesPage,
    ReservationPage,
    CommentsPage,
//week3
LoginPage,
RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
// week1
    AboutPage,
    MenuPage,
    ContactPage,
    DishdetailPage,
//week2
    FavoritesPage,
    ReservationPage,
    CommentsPage,
 //week3
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler},
    DishProvider,
    LeaderProvider,
    PromotionProvider,
    ProcessHttpmsgProvider,
    { provide: 'BaseURL', useValue: baseURL },
    FavoriteProvider,
    // Network,
    LocalNotifications,
    EmailComposer,
    SocialSharing
    // CallNumber,
    // Camera
  ]
})
export class AppModule {}
