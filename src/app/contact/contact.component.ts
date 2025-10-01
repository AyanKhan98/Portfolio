import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DomainService } from '../services/domain.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.css',
  ]
})
export class ContactComponent {
  name = "ayan_khan"
  email = "ayankhann98@gmail.com"
  constructor(private titleService: Title, private domainService: DomainService)
  {
    this.titleService.setTitle('AK | Contact');
    if(domainService.Domain() === "goutamkhan-portfolio.vercel.app")
    {
        this.name = "goutam_Khan";
        this.email = "goutamkhan2222@gmail.com";
    }
  }
}
