import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAdmin = false;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.cookieService.get('auth'),
    }),
  };

  constructor(
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<boolean>('https://techhotel-edge.herokuapp.com/users/is-admin',
    this.httpOptions).subscribe((bool) => (this.isAdmin = bool));
  }

  ngAfterViewInit(): void {
    const content = document.getElementsByClassName('content');
    let navbar = document.getElementsByClassName('Navbar')[0] as HTMLElement;
    let navWidth = navbar.offsetWidth + 'px';
    
    for (let i = 0; i < content.length; i++) {
      const e = content[i] as HTMLElement;
      e.style.marginLeft = navWidth;
    }

    window.addEventListener('resize', () => {
      navbar = document.getElementsByClassName('Navbar')[0] as HTMLElement;
      navWidth = navbar.offsetWidth + 'px';
      for (let i = 0; i < content.length; i++) {
        const e = content[i] as HTMLElement;
        e.style.marginLeft = navWidth;
      }
    });
  }

  logout = () => {
    this.cookieService.delete('auth');
    this.cookieService.delete('username');
    this.router.navigate(['/login'], { relativeTo: this.route });
  }

}
