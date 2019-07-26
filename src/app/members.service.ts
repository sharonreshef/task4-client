import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from 'models/member.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  constructor(private httpClient: HttpClient) {}

  getMembersFromServer(): Observable<Member[]> {
    return this.httpClient.get<Member[]>(`http://localhost:3000/members/`);
  }
}
