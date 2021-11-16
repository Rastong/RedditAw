import { Component, OnInit } from '@angular/core';
import { AwwService } from '../aww.service';

@Component({
  selector: 'app-aw',
  templateUrl: './aw.component.html',
  styleUrls: ['./aw.component.css']
})
export class AwComponent implements OnInit {

  constructor(private awService:AwwService) { }

  ngOnInit(): void {
    this.awService.getAww().subscribe((response:any) => {
      this.awService = response.data;
      console.log(this.awService);
    })
  }
}
