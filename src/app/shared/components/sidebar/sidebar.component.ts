import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  menu = [
    {option: 'dashboard'},
    {option: 'appointment'},
    {option: 'doctors'},
    {option: 'department'},
    {option: 'patients'},
    {option: 'chats'},
    {option: 'calls'},
  ]
  ngOnInit() {
  }

}
