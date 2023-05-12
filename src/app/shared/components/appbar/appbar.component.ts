import {  Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit{


    constructor(){
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

  }

