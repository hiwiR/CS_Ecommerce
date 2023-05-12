import { Component,ViewChild,OnInit } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { SidenavService } from './sidenav.service';
@Component({
  selector: 'app-leftsidenav',
  templateUrl: './leftsidenav.component.html',
  styleUrls: ['./leftsidenav.component.scss']
})
export class LeftsidenavComponent implements OnInit{
  @ViewChild('matSideNav',{static: true}) sideNav !: MatSidenav;
  constructor(private sideNavService : SidenavService){

  }
   ngOnInit(): void {
     //this.sideNavService.setSideNav(this.sideNav);
   }
}
