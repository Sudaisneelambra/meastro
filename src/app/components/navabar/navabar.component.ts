import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css'],
  imports:[CommonModule],
  standalone:true
})
export class NavabarComponent {

  constructor(private router:Router){}


  isActive(route: string): boolean {
    // const currentRoute = this.router.url.split('/').pop();  
    return this.router.url.split('/').includes(route)
  }

  isReportActive(route: string): boolean {
    // const currentRoute = this.router.url.split('/').pop();  
    return this.router.url.split('/').includes(route)
  }


  navigateTo(route: string): void { 
    this.router.navigate([`/home/${route}`]);
  }
  navigateToInner(route: string): void {     
    this.router.navigate([`/home/reports/${route}`]);
  }

  mouseHovered=false

}
