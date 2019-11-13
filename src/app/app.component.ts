import { Component } from '@angular/core';

@Component({ //decorators; becomes angular component; same concept as mvc controller which is derived from controller base 
  selector: 'app-root', //can execute component using this selector anywhere; selector use as html tag
  templateUrl: './app.component.html', //every component will return app.component.html; the same as the controller in C# that will return in views 
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'MovieShopSpa'; //one component will only return one view; one controller one action method 
}
