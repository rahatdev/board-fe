import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'boards-card',
  templateUrl: './boards-card.component.html',
  styleUrls: ['./boards-card.component.scss']
})
export class BoardsCardComponent implements OnInit {

  @Input('board') board
  columns = 2;

  ngOnInit(): void {
    let length = this.board.boards ? this.board.boards.length : 2;
    if (length > 2) this.columns = 4;
      
  }

  selectBoard() {
    //console.log(this.board)
    console.log(`columns: ${this.columns} -- length: ${this.board.boards.length}`)
  }

}
