import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

    private redirectedFromOldDomain = false;

      setRedirected(value: boolean): void {
        this.redirectedFromOldDomain = value;
      }

      isRedirected(): boolean {
        return this.redirectedFromOldDomain;
      }
}
