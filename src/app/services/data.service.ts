import { Injectable } from '@angular/core';
import { Data } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private repository: Data[] = [
    {
      id: 1,
      value: 100,
      date: new Date('2024-01-15'),
      name: 'Project Alpha',
      description: 'Initial project setup'
    },
    {
      id: 2,
      value: 250,
      date: new Date('2024-02-20'),
      name: 'Project Beta',
      description: 'Development phase'
    },
    {
      id: 3,
      value: 175,
      date: new Date('2024-03-10'),
      name: 'Project Gamma',
      description: 'Testing phase'
    },
    {
      id: 4,
      value: 320,
      date: new Date('2024-04-05'),
      name: 'Project Delta',
      description: 'Deployment phase'
    },
    {
      id: 5,
      value: 150,
      date: new Date('2024-05-12'),
      name: 'Project Epsilon',
      description: 'Maintenance phase'
    }
  ];

  constructor() {}

  getAllRecords(): Data[] {
    return this.repository.map(record => ({ ...record }));
  }

  getRecordById(id: number): Data | null {
    const record = this.repository.find(r => r.id === id);
    return record ? { ...record } : null;
  }
}