import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { AwwService } from '../aww.service';
import { IAww } from '../iaww';

@Component({
  selector: 'app-aw',
  templateUrl: './aw.component.html',
  styleUrls: ['./aw.component.css']
})
export class AwComponent implements OnInit {
  data:IAww[] = []; 
  constructor(private awService:AwwService) { }

  ngOnInit(): void {
    this.awService.getAww().subscribe((response:any) => {
      response.data.children.forEach((element:any) => {
        let newPost:IAww = {
          title: element.data.title,
          img: element.data.thumbnail,
          url: "https://reddit.com"+element.data.permalink
        };
        this.data.push(newPost);
      });
      console.log(this.awService);
    })
  }
}
