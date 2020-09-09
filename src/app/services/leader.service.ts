import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADER } from '../shared/leaders';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ 
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders(): Observable<Leader[]> {
    return of(LEADER).pipe(delay(500));
  }

  getLeader(id: string): Observable<Leader> {
    return of(LEADER.filter((lead) => (lead.id === id))[0]).pipe(delay(500));
  }

  getFeaturedLeader(): Observable<Leader> {
    return of(LEADER.filter((leader) => leader.featured)[0]).pipe(delay(500));
  }
  
}