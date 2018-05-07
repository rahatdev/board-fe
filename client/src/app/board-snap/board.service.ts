import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Board } from '../core/models/board';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BoardService {

  private sampleData: Board[] = [{
      id: 'tJusdiu23123',
      title: 'General Plan',
      category: 'May Meeting',
      date: new Date(2017, 5, 21),
      img: 'testimg.jpg',
      text: ['magice', 'mike', 'flat', 'footed']
    },{
      id: 'tJusdiu23sd3',
      title: 'Marketing Detail',
      category: 'May Meeting',
      date: new Date(2017, 5, 21),
      img: 'testimg2.jpg',
      text: ['frolic', 'sell', 'users', 'things']
    },{
      id: 'asd987asdhkj',
      title: 'Dev Plan',
      category: 'Dev Meeting',
      date: new Date(2018, 1, 11),
      img: 'dev.jpg',
      text: ['do', 'cool', 'algorithms', 'n', 'stuffs']
    },{
      id: 'sd987ahjdladfuy9uh',
      title: 'Backend Plan',
      category: 'Dev Meeting',
      date: new Date(2018, 1, 11),
      img: 'dev2.jpg',
      text: ['db']
    },{
      id: 'dasdas098ojasdiuh9',
      title: 'Master Plan',
      category: 'Corp',
      date: new Date(2018, 1, 11),
      img: 'mater.jpg',
      text: []
    },{
      id: 'sd987ahjdladfuy9uh',
      title: 'Quarter horse',
      category: 'Horses',
      date: new Date(2018, 1, 11),
      img: 'dev2.jpg',
      text: ['horse']
    },{
      id: 'sd987ahjdladfuy9uh',
      title: 'Palmilino',
      category: 'Horses',
      date: new Date(2018, 1, 11),
      img: 'dev2.jpg',
      text: ['db']
    },{
      id: 'sd987ahjdladfuy9uh',
      title: 'Palmilino',
      category: 'Horses',
      date: new Date(2018, 1, 11),
      img: 'dev2.jpg',
      text: ['db']
    },{
      id: 'sd987ahjdladfuy9uh',
      title: 'Palmilino',
      category: 'Horses',
      date: new Date(2018, 1, 11),
      img: 'dev2.jpg',
      text: ['db']
    },{
      id: 'sd987ahjdladfuy9uh',
      title: 'Palmilino',
      category: 'Horses',
      date: new Date(2018, 1, 11),
      img: 'dev2.jpg',
      text: ['db']
    }
  ]

  constructor(private http: HttpClient) { }

  getBoardsForUser(user): Observable<any>{
    return new Observable(observer => {
      this.sampleData.forEach((board, i, arr) => {
        observer.next(board);
        if(i >= arr.length -1) observer.complete();
      })
    })
  }

}
