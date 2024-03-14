import { Component } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { Version } from '../models/version';

const apiURL = 'https://api.weglowapp.net/v1/version';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isLoading = false;

  version: Version | null = null;

  constructor(private api: ApiService) {}

  callApi() {
    this.isLoading = true;
    this.api.get(apiURL).subscribe((res: Version) => {
      this.isLoading = false;

      this.version = res;
    });
  }
}
