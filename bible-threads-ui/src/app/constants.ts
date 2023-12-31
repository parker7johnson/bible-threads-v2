import { HttpHeaders } from "@angular/common/http";

export const Constants = {
  BIBLE: {
    bibleBooks: {
      Genesis: {
        name: 'Genesis',
        number: 1,
        chapters: 50,
      },
      Exodus: {
        name: 'Exodus',
        number: 2,
        chapters: 40,
      },
      Leviticus: {
        name: 'Leviticus',
        number: 3,
        chapters: 27,
      },
      Numbers: {
        name: 'Numbers',
        number: 4,
        chapters: 36,
      },
      Deuteronomy: {
        name: 'Deuteronomy',
        number: 5,
        chapters: 34,
      },
      Joshua: {
        name: 'Joshua',
        number: 6,
        chapters: 24,
      },
      Judges: {
        name: 'Judges',
        number: 7,
        chapters: 21,
      },
      Ruth: {
        name: 'Ruth',
        number: 8,
        chapters: 4,
      },
      '1 Samuel': {
        name: '1 Samuel',
        number: 9,
        chapters: 31,
      },
      '2 Samuel': {
        name: '2 Samuel',
        number: 10,
        chapters: 24,
      },
      '1 Kings': {
        name: '1 Kings',
        number: 11,
        chapters: 22,
      },
      '2 Kings': {
        name: '2 Kings',
        number: 12,
        chapters: 25,
      },
      '1 Chronicles': {
        name: '1 Chronicles',
        number: 13,
        chapters: 29,
      },
      '2 Chronicles': {
        name: '2 Chronicles',
        number: 14,
        chapters: 36,
      },
      Ezra: {
        name: 'Ezra',
        number: 15,
        chapters: 10,
      },
      Nehemiah: {
        name: 'Nehemiah',
        number: 16,
        chapters: 13,
      },
      Esther: {
        name: 'Esther',
        number: 17,
        chapters: 10,
      },
      Job: {
        name: 'Job',
        number: 18,
        chapters: 42,
      },
      Psalms: {
        name: 'Psalms',
        number: 19,
        chapters: 150,
      },
      Proverbs: {
        name: 'Proverbs',
        number: 20,
        chapters: 31,
      },
      Ecclesiastes: {
        name: 'Ecclesiastes',
        number: 21,
        chapters: 12,
      },
      'Song of Solomon': {
        name: 'Song of Solomon',
        number: 22,
        chapters: 8,
      },
      Isaiah: {
        name: 'Isaiah',
        number: 23,
        chapters: 66,
      },
      Jeremiah: {
        name: 'Jeremiah',
        number: 24,
        chapters: 52,
      },
      Lamentations: {
        name: 'Lamentations',
        number: 25,
        chapters: 5,
      },
      Ezekiel: {
        name: 'Ezekiel',
        number: 26,
        chapters: 48,
      },
      Daniel: {
        name: 'Daniel',
        number: 27,
        chapters: 12,
      },
      Hosea: {
        name: 'Hosea',
        number: 28,
        chapters: 14,
      },
      Joel: {
        name: 'Joel',
        number: 29,
        chapters: 3,
      },
      Amos: {
        name: 'Amos',
        number: 30,
        chapters: 9,
      },
      Obadiah: {
        name: 'Obadiah',
        number: 31,
        chapters: 1,
      },
      Jonah: {
        name: 'Jonah',
        number: 32,
        chapters: 4,
      },
      Micah: {
        name: 'Micah',
        number: 33,
        chapters: 7,
      },
      Nahum: {
        name: 'Nahum',
        number: 34,
        chapters: 3,
      },
      Habakkuk: {
        name: 'Habakkuk',
        number: 35,
        chapters: 3,
      },
      Zephaniah: {
        name: 'Zephaniah',
        number: 36,
        chapters: 3,
      },
      Haggai: {
        name: 'Haggai',
        number: 37,
        chapters: 2,
      },
      Zechariah: {
        name: 'Zechariah',
        number: 38,
        chapters: 14,
      },
      Malachi: {
        name: 'Malachi',
        number: 39,
        chapters: 4,
      },
      Matthew: {
        name: 'Matthew',
        number: 40,
        chapters: 28,
      },
      Mark: {
        name: 'Mark',
        number: 41,
        chapters: 16,
      },
      Luke: {
        name: 'Luke',
        number: 42,
        chapters: 24,
      },
      John: {
        name: 'John',
        number: 43,
        chapters: 21,
      },
      Acts: {
        name: 'Acts',
        number: 44,
        chapters: 28,
      },
      Romans: {
        name: 'Romans',
        number: 45,
        chapters: 16,
      },
      '1 Corinthians': {
        name: '1 Corinthians',
        number: 46,
        chapters: 16,
      },
      '2 Corinthians': {
        name: '2 Corinthians',
        number: 47,
        chapters: 13,
      },
      Galatians: {
        name: 'Galatians',
        number: 48,
        chapters: 6,
      },
      Ephesians: {
        name: 'Ephesians',
        number: 49,
        chapters: 6,
      },
      Philippians: {
        name: 'Philippians',
        number: 50,
        chapters: 4,
      },
      Colossians: {
        name: 'Colossians',
        number: 51,
        chapters: 4,
      },
      '1 Thessalonians': {
        name: '1 Thessalonians',
        number: 52,
        chapters: 5,
      },
      '2 Thessalonians': {
        name: '2 Thessalonians',
        number: 53,
        chapters: 3,
      },
      '1 Timothy': {
        name: '1 Timothy',
        number: 54,
        chapters: 6,
      },
      '2 Timothy': {
        name: '2 Timothy',
        number: 55,
        chapters: 4,
      },
      Titus: {
        name: 'Titus',
        number: 56,
        chapters: 3,
      },
      Philemon: {
        name: 'Philemon',
        number: 57,
        chapters: 1,
      },
      Hebrews: {
        name: 'Hebrews',
        number: 58,
        chapters: 13,
      },
      James: {
        name: 'James',
        number: 59,
        chapters: 5,
      },
      '1 Peter': {
        name: '1 Peter',
        number: 60,
        chapters: 5,
      },
      '2 Peter': {
        name: '2 Peter',
        number: 61,
        chapters: 3,
      },
      '1 John': {
        name: '1 John',
        number: 62,
        chapters: 5,
      },
      '2 John': {
        name: '2 John',
        number: 63,
        chapters: 1,
      },
      '3 John': {
        name: '3 John',
        number: 64,
        chapters: 1,
      },
      Jude: {
        name: 'Jude',
        number: 65,
        chapters: 1,
      },
      Revelation: {
        name: 'Revelation',
        number: 66,
        chapters: 22,
      },
    },

    REVERSED_BOOK_IDS: {
      GEN: 'Genesis',
      EXO: 'Exodus',
      LEV: 'Leviticus',
      NUM: 'Numbers',
      DEU: 'Deuteronomy',
      JOS: 'Joshua',
      JDG: 'Judges',
      RUT: 'Ruth',
      '1SA': '1 Samuel',
      '2SA': '2 Samuel',
      '1KI': '1 Kings',
      '2KI': '2 Kings',
      '1CH': '1 Chronicles',
      '2CH': '2 Chronicles',
      EZR: 'Ezra',
      NEH: 'Nehemiah',
      EST: 'Esther',
      JOB: 'Job',
      PSA: 'Psalms',
      PRO: 'Proverbs',
      ECC: 'Ecclesiastes',
      SNG: 'Song of Solomon',
      ISA: 'Isaiah',
      JER: 'Jeremiah',
      LAM: 'Lamentations',
      EZK: 'Ezekiel',
      DAN: 'Daniel',
      HOS: 'Hosea',
      JOL: 'Joel',
      AMO: 'Amos',
      OBA: 'Obadiah',
      JON: 'Jonah',
      MIC: 'Micah',
      NAM: 'Nahum',
      HAB: 'Habakkuk',
      ZEP: 'Zephaniah',
      HAG: 'Haggai',
      ZEC: 'Zechariah',
      MAL: 'Malachi',
      MAT: 'Matthew',
      MRK: 'Mark',
      LUK: 'Luke',
      JHN: 'John',
      ACT: 'Acts',
      ROM: 'Romans',
      '1CO': '1 Corinthians',
      '2CO': '2 Corinthians',
      GAL: 'Galatians',
      EPH: 'Ephesians',
      PHP: 'Philippians',
      COL: 'Colossians',
      '1TH': '1 Thessalonians',
      '2TH': '2 Thessalonians',
      '1TI': '1 Timothy',
      '2TI': '2 Timothy',
      TIT: 'Titus',
      PHM: 'Philemon',
      HEB: 'Hebrews',
      JAS: 'James',
      '1PE': '1 Peter',
      '2PE': '2 Peter',
      '1JN': '1 John',
      '2JN': '2 John',
      '3JN': '3 John',
      JUD: 'Jude',
      REV: 'Revelation',
    },
  },

  API: {
    API_URL: 'https://iq-bible.p.rapidapi.com',
    API_HEADERS: new HttpHeaders({
      'X-RapidAPI-Key': '95d178f175msh71e0def68c5614bp1402b7jsn6896de61e935',
      'X-RapidAPI-Host': 'iq-bible.p.rapidapi.com',
    }),

    SEARCH_URL:
      'https://api.scripture.api.bible/v1/bibles/32664dc3288a28df-02/search?query=',
    SEARCH_HEADER: new HttpHeaders({
      'api-key': 'd9eeb3a78eb9e023e42a56dc661e27b1',
    }),
  },
};