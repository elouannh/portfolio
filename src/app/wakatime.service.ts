import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WakatimeService {
  private apiUrl: string = 'https://wakatime.com/api/v1';

  constructor(private http: HttpClient) { }

  public getUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/elouannh/stats`);
  }
}
