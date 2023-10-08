import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { initializeApp } from 'firebase/app';
import {
  collection, 
  query,
  where, 
  getDocs,
  Firestore,
  getFirestore
} from 'firebase/firestore'
import { fireBaseConfig } from 'firebaseconfig';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  favoriteBooks: string[] = [];
  db : Firestore;
  constructor(private fireStore : AngularFirestore) {
    this.db = getFirestore(initializeApp(fireBaseConfig));
  }

  ngOnInit() {
    this.getBooks();
  }

  async getBooks() {
    const booksRef = collection(this.db, 'favoriteBooks');
    const bookQuerey = query(booksRef, where('uid', '==', localStorage.getItem('userId')));
    const bookSnapShot = await getDocs(bookQuerey);
    bookSnapShot.forEach(doc => {
      this.favoriteBooks = doc.data()['books'];
    })
  }
}
