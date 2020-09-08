import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADER } from '../shared/leaders';

@Injectable({ 
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADER);
  }
  getLeader(id: string): Promise<Leader> {
    return Promise.resolve(LEADER.filter((lead) => (lead.id === id))[0]);
  }

  getFeaturedLeader(): Promise<Leader> {
    return Promise.resolve(LEADER.filter((leader) => leader.featured)[0]);
  }  
}