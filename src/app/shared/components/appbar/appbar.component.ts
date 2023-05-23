import {  Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit{


    constructor(private router: Router){
    }

    

  ngOnInit(): void {
    // this.sideNav.opened = true;
    // this.observer.observe(['max-width:787px'])
    // .subscribe((res) => {
    //   if(res?.matches) {
    //     this.sideNav.mode = "over";
    //     this.sideNav.close();
    //   }
    //   else{
    //     this.sideNav.mode = "side";
    //     this.sideNav.open();
    //   }
    // })
  }
  viewCart(): void {
      this.router.navigate(['/cart/view'])
  }
  }

