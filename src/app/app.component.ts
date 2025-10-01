import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { RedirectService } from './services/redirect.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    
    constructor(private redirectService: RedirectService) {}

    ngOnInit(): void {
      const referrer = document.referrer;
      if (referrer && referrer.includes('goutamkhan-portfolio.vercel.app')) {
        this.redirectService.setRedirected(true);
        console.log('User was redirected from olddomain.com');
      }
    }
}
