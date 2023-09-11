import { HttpHeaders } from "@angular/common/http";

export const Constants = {
   BIBLE : {
        bibleBooks : {
            "Genesis": {
              number: 1,
              chapters: 50
            },
            "Exodus": {
              number: 2,
              chapters: 40
            },
            "Leviticus": {
              number: 3,
              chapters: 27
            },
            "Numbers": {
              number: 4,
              chapters: 36
            },
            "Deuteronomy": {
              number: 5,
              chapters: 34
            },
            "Joshua": {
              number: 6,
              chapters: 24
            },
            "Judges": {
              number: 7,
              chapters: 21
            },
            "Ruth": {
              number: 8,
              chapters: 4
            },
            "1 Samuel": {
              number: 9,
              chapters: 31
            },
            "2 Samuel": {
              number: 10,
              chapters: 24
            },
            "1 Kings": {
              number: 11,
              chapters: 22
            },
            "2 Kings": {
              number: 12,
              chapters: 25
            },
            "1 Chronicles": {
              number: 13,
              chapters: 29
            },
            "2 Chronicles": {
              number: 14,
              chapters: 36
            },
            "Ezra": {
              number: 15,
              chapters: 10
            },
            "Nehemiah": {
              number: 16,
              chapters: 13
            },
            "Esther": {
              number: 17,
              chapters: 10
            },
            "Job": {
              number: 18,
              chapters: 42
            },
            "Psalms": {
              number: 19,
              chapters: 150
            },
            "Proverbs": {
              number: 20,
              chapters: 31
            },
            "Ecclesiastes": {
              number: 21,
              chapters: 12
            },
            "Song of Solomon": {
              number: 22,
              chapters: 8
            },
            "Isaiah": {
              number: 23,
              chapters: 66
            },
            "Jeremiah": {
              number: 24,
              chapters: 52
            },
            "Lamentations": {
              number: 25,
              chapters: 5
            },
            "Ezekiel": {
              number: 26,
              chapters: 48
            },
            "Daniel": {
              number: 27,
              chapters: 12
            },
            "Hosea": {
              number: 28,
              chapters: 14
            },
            "Joel": {
              number: 29,
              chapters: 3
            },
            "Amos": {
              number: 30,
              chapters: 9
            },
            "Obadiah": {
              number: 31,
              chapters: 1
            },
            "Jonah": {
              number: 32,
              chapters: 4
            },
            "Micah": {
              number: 33,
              chapters: 7
            },
            "Nahum": {
              number: 34,
              chapters: 3
            },
            "Habakkuk": {
              number: 35,
              chapters: 3
            },
            "Zephaniah": {
              number: 36,
              chapters: 3
            },
            "Haggai": {
              number: 37,
              chapters: 2
            },
            "Zechariah": {
              number: 38,
              chapters: 14
            },
            "Malachi": {
              number: 39,
              chapters: 4
            },
            "Matthew": {
              number: 40,
              chapters: 28
            },
            "Mark": {
              number: 41,
              chapters: 16
            },
            "Luke": {
              number: 42,
              chapters: 24
            },
            "John": {
              number: 43,
              chapters: 21
            },
            "Acts": {
              number: 44,
              chapters: 28
            },
            "Romans": {
              number: 45,
              chapters: 16
            },
            "1 Corinthians": {
              number: 46,
              chapters: 16
            },
            "2 Corinthians": {
              number: 47,
              chapters: 13
            },
            "Galatians": {
              number: 48,
              chapters: 6
            },
            "Ephesians": {
              number: 49,
              chapters: 6
            },
            "Philippians": {
              number: 50,
              chapters: 4
            },
            "Colossians": {
              number: 51,
              chapters: 4
            },
            "1 Thessalonians": {
              number: 52,
              chapters: 5
            },
            "2 Thessalonians": {
              number: 53,
              chapters: 3
            },
            "1 Timothy": {
              number: 54,
              chapters: 6
            },
            "2 Timothy": {
              number: 55,
              chapters: 4
            },
            "Titus": {
              number: 56,
              chapters: 3
            },
            "Philemon": {
              number: 57,
              chapters: 1
            },
            "Hebrews": {
              number: 58,
              chapters: 13
            },
            "James": {
              number: 59,
              chapters: 5
            },
            "1 Peter": {
              number: 60,
              chapters: 5
            },
            "2 Peter": {
              number: 61,
              chapters: 3
            },
            "1 John": {
              number: 62,
              chapters: 5
            },
            "2 John": {
              number: 63,
              chapters: 1
            },
            "3 John": {
              number: 64,
              chapters: 1
            },
            "Jude": {
              number: 65,
              chapters: 1
            },
            "Revelation": {
              number: 66,
              chapters: 22
            }
        }  
    },

    API : {
        API_URL : 'https://iq-bible.p.rapidapi.com',
        API_HEADERS : new HttpHeaders({
            'X-RapidAPI-Key': '95d178f175msh71e0def68c5614bp1402b7jsn6896de61e935',
            'X-RapidAPI-Host': 'iq-bible.p.rapidapi.com'
        }),
    }
}