import { Component, OnInit } from '@angular/core';
import { headerProperties } from '../../consts/header.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerProperties = headerProperties; 
  constructor() { }

  ngOnInit(): void {
  }

}
