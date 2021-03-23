import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}
routeToCreate(): void {
this.router.navigate(['word-list'], {relativeTo : this.route.parent});
}
routeToPractice(): void {
  console.log('clicked');
 this.router.navigate(['practice']);
}
routeToExam(): void {
  this.router.navigate(['exam'],  {relativeTo : this.route.parent});
}

}
