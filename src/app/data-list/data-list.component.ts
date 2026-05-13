import { Component, OnInit } from '@angular/core';
import { Data } from '../models/data.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css'],
  standalone: false
})
export class DataListComponent implements OnInit {
  dataList: Data[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataList = this.dataService.getAllRecords();
  }
}
