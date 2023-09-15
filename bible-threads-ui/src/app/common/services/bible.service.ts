import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpService } from './http.service';
import { HttpParams } from '@angular/common/http';
import { Constants } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class BibleService {
  BASE_API = Constants.API.API_URL;
  SEARCH_API = Constants.API.SEARCH_URL;
  bookId : any = '1';
  chapterId : any = '1';
  constructor(private http : HttpService) { }
  
  getChapter(bookId : any, chapter : any, versionId: any) {
    let url = this.BASE_API + '/GetChapter';
    const params = new HttpParams()
      .set('bookId', bookId)
      .set('chapterId', chapter)
      .set('versionId', versionId);

    return this.http.get(url, params);
  }

  searchBible(searchQuery : string, sortType : string) {
    let url = this.SEARCH_API + searchQuery + `&sort=${sortType}`;
    return this.http.getWithHeaders(url);
  }

  setIds(chapterId : any, bookId : any) {
    this.chapterId = chapterId;
    this.bookId = bookId;
  }

  getIds() {
    return { chatper : this.chapterId, book: this.bookId }
  }
}
