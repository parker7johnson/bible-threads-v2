import { Component } from '@angular/core';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-verses',
  templateUrl: './verses.component.html',
  styleUrls: ['./verses.component.scss']
})
export class VersesComponent {
  favoriteVerses: any[] = [];
  books : any = Object.keys(Constants.BIBLE.bibleBooks);
  addedVerse : string = '';
  private bookPattern : RegExp = new RegExp(/^(\d\s)?[A-Z][a-zA-Z]*\s\d{1,3}:\d{1,3}$/);

  addToFavoritesList(verse : any) {
    let verseRef = verse.split(' ');
    let bookName = this.parseRef(verseRef)
    if (this.validateVerse(verse, bookName) && this.isValidLength()) {
        this.favoriteVerses.push({
          enteredText : verse,
          bookName : this.parseRef(verseRef),
          bookNumber : this.parseChapter(verse)
        });
    }
    this.addedVerse = ''; 
  }

  isValidLength() {
    // alert('You can only have 3 favorites');
    return this.favoriteVerses.length < 3;
  }

  isValidVerse(verse : any, bookName : any) {
    if (!this.bookPattern.test(verse) || this.books.indexOf(bookName) < 0) {
      return false;
    }
    return true;
  }

  doesFavoriteExist(verse : any) {
    const index = this.favoriteVerses.findIndex((item) => item.enteredText === verse);
    return index;
  }

  validateVerse(verse : any, bookName : any) {
    if (!this.isValidVerse(verse, bookName)) {
     alert(`Sorry, ${verse} is not a valid bible verse`);
     this.addedVerse = '';
     return false;
    } 
    if (this.doesFavoriteExist(verse) >= 0) {
      alert(`Sorry, you can't have 2 favorites`);
      this.addedVerse = '';
      return false;
    }
    return true;
  }

  navigateToVerse(index : any) {
    return `/landing/read/${this.favoriteVerses[index].bookName}/${this.favoriteVerses[index].bookNumber}/1`
  }

  deleteFavorite(i : any) {
    this.favoriteVerses.splice(i, 1);
  }

  private parseRef(bookRef : any) {
    console.log(bookRef)
    if (bookRef[0].length == 1) {
      console.log(bookRef[0] + ' ' + bookRef[1]);
      return bookRef[0] + ' ' + bookRef[1];
    } else {
      console.log(bookRef[0]);
      return bookRef[0];
    }
  }

  private parseChapter(verse : string) {
    let verseRef = verse.split(' ');
    let bookName = this.parseRef(verseRef);
    console.log(bookName)
    if (bookName.split(' ').length > 1) {
      return verseRef[2].charAt(0);
    } else {
      return verseRef[1].charAt(0);
    }
  }
}

