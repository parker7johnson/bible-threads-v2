import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpParams } from '@angular/common/http';
import { Constants } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class BibleService {

  constructor(private http : HttpService) { }

  getChapter(bookId : any, chapter : any, versionId: any) {
    let url = Constants.API.API_URL + '/GetChapter';
    const params = new HttpParams()
      .set('bookId', bookId)
      .set('chapterId', chapter)
      .set('versionId', versionId);

    return this.http.get(url, params);
  }
}
