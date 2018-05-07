import { Component, OnInit } from '@angular/core';
import { Board } from '../../core/models/board';
import { BoardService } from '../board.service';
import { AuthService } from '../../core/auth.service';



@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  // get boards for user
  boards: Board[] = [];
  filteredBoards: any[];

  
  private _searchText : string;
  public get searchText() : string { return this._searchText; }
  public set searchText(v : string) {
    this._searchText = v;
    this.showAll();
    this.filteredBoards = this.searchText ? 
        this.filterSearch(this.searchText) : this.boards
  }
  

  constructor(
    private boardService: BoardService,
    private auth: AuthService
  ) { }

  //initialize with service, but move to redux after
  ngOnInit() {
    this.boardService.getBoardsForUser(this.auth.getUser()).subscribe(board => {
      this.boards.push(board);

      this.filteredBoards = this.boards;
    })
  }

  selectBoard(board) {
    console.log(board);
  }

  filterByCategory() {
    this.filteredBoards = this.boards.reduce((categories, board) => {
      let index = categories.findIndex(category => category.category === board.category)
      if (index > -1) {
        categories[index]['boards'].push(board);
      } else {
        categories.push({
          title: board.category,
          category: board.category,
          boards: [board]
        })
      }
      return categories;
    }, [])
  }

  filterByDate() {
    this.filteredBoards = this.boards.reduce((dates, board) => {
      let index = dates.findIndex(date => date.date == board.date.toDateString())
      if (index > -1) {
        dates[index]['boards'].push(board);
      } else {
        dates.push({
          title: board.date.toDateString(),
          date: board.date.toDateString(),
          boards: [board]
        })
      }
      return dates;
    }, [])
  }

  showAll() {
    this.filteredBoards = this.boards
  }

  filterSearch(searchText: string): Board[]{
    searchText = searchText.toLocaleLowerCase();
    return this.boards.filter(board => {
      //console.log(board.text.filter(word => word.toLocaleLowerCase().indexOf(searchText) !== -1))
      return board.title.toLocaleLowerCase().indexOf(searchText) !== -1
        || board.category.toLocaleLowerCase().indexOf(searchText) !== -1
        || board.text.filter(word => word.toLocaleLowerCase().indexOf(searchText) !== -1).length > 0
        
    })
  }

}
