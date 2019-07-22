import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../services/quotes.service';

@Component({
  selector: 'app-misato',
  templateUrl: './misato.component.html',
  styleUrls: ['./misato.component.css']
})
export class MisatoComponent implements OnInit {
  private quote:string='';
  private author:string='';

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    this.getQuotes();
  }
  getQuotes(){
    return this.quotesService.getQuotes().subscribe(data => {
      this.quote=data.quote;
      this.author=data.author;
      return data;
    });
  }
}
