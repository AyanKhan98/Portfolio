import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  constructor() { }
  private domainName = window.location.hostname;

  Domain(): string {
    return this.domainName;
  }
}
