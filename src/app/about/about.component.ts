import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { DomainService } from '../services/domain.service';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.css',
  ]
})
export class AboutComponent {
  name = "Ayan Khan";
  constructor(private titleService: Title, private domainService: DomainService) {
    this.titleService.setTitle('AK | About');
      
      if(this.domainService.Domain() === "goutamkhan-portfolio.vercel.app")
      {
          this.name = "Goutam Khan"
      }
      
  }
}
